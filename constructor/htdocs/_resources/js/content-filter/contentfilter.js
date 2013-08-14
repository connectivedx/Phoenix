/* 

	Custom filter views. Includes fuctions for:
	
		1. pagination (customized jquery pagination plugin)
		2. link toggle control
		3. form field filters
		4. content type radio toggle
		5. alpha list
		6. table sorting
	
	Requires:
	
		1. jquery.pagination.js
		2. sort up/down images
		3. record set arrays to be defined in calling page - structure dependent on what filtering needs to happen. refer to examples.
		4. filetype icons
		5. proper HTML structures for containing elements
	
*/

var ContentFilter = ContentFilter || {}; // define early for use inline

// Namespace to hold all options
// These can be overridden inline as needed
ContentFilter = {
	
	imgpath 		: "_resources/img/css/", 				// directory to look to for images
	imgpathfiles 	: "_resources/img/source/filetypes",	// directory to look to for filetype icons
	arrowup 		: "arrow_up_white.gif", 				// table sort up arrow
	arrowdown 		: "arrow_down_white.gif", 				// table sort down arrow
	contentstart	: "", 									// default HTML start string for new content on pagination
	contentend		: "", 									// default HTML end string for new content on pagination

	pagination 		: {										// pagination options. override inline as needed
							options : {
								num_edge_entries: 2,
								num_display_entries: 50,
								items_per_page: 5,
								prev_text: "Previous",
								next_text: "Next",
								callback: function(){ return false; } // just to prevent errors. needs to be set inline.
							}
					  },
					  
	currentrecord	: this.records,							// set default records
	paginated		: false,								// flag to keep state of whether pagination has initialized yet
	paginate 		: function(){							// function to trigger pagination
						jQuery("div.pagination").pagination(ContentFilter.currentrecord.length, ContentFilter.pagination.options);
						ContentFilter.paginated = true;
					  },
	alphalist		: {},									// alpha list options
	mode			: "default"								// flag to handle special cases (alphalist)

};

// Dom loaded / jQuery
// initialize all the functionality
jQuery(function($) {

	// bind the paginate event
	$("body").bind("paginate",ContentFilter.paginate);


	// set up content filter toggle links. ex: ut-4
	$("p.content-filter-toggle").each(function(){
		contentFilterToggle($(this)); 					// triggers paginate
	});


	// initialize filtering. ex: ut-7
	if($("form.form-filter-list").length) {
		initFiltering();								// triggers paginate
	}


	// initialize table sorting. ex: ut-7
	initTableSort();


	// set up filter listing. ex: ut-18
	if($("form.form-filtered-content").length){
	
		// hide all but first content set		
		$("table.toggledcontent:not(:first)").hide();

		// bind change to radio buttons to toggle content
		$("form.form-filtered-content input:radio").bind("click",toggleContent);		
		$("form.form-filtered-content input:checked").trigger("click");				// triggers paginate
		
		// prevent the form from submitting
		$("form.form-filtered-content").submit(function(e){ e.preventDefault(); });	

	} // end filting listing init
	
	
	// special alpha-listing treatment. ex: ut-9
	if(ContentFilter.mode == "alphalist") {
		initAlpha();									// triggers paginate
	}	


	// if pagination has not been triggered by another process, do it. ex: ut-7-regulatory
	if(!ContentFilter.paginated){	
		initPagination(ContentFilter.records);
	}
	
});


/*	--------------------------------------------------------------------------------------------------------------------

	Pagination 
	
	Uses customized jQuery pagination plugin.
	
	Functions required inline:
	
		1. getItemContent [can be mulitple]*
			- defines HTML structure for each item
			- receives recordset and current page index
			- * if mulitple versions, pageselectCallback must contain logic to sort. ex: ut-18
		2. pageselectCallback
			- called from pagination plugin
			- receives page index and element jq object
			- * if mulitple versions of getItemContent, must contain logic to sort. ex: ut-18
	
	ContentFilter object dependencies:
		
		1. items_per_page
		2. contentstart
		3. content end

*/

// utility function to initialize pagination. receives recordset and boolean for whether to reset current page index
// page defaults to false if not set
var initPagination = function(records,page) {
	// set current page
	setCurrentPage(page||false);
	
	// set current content to new item
	setCurrentRecord(records);
	
	// trigger paginate		
	jQuery("body").trigger("paginate");	
};

// utility function to set the current record set.
var setCurrentRecord = function(arr) {
	ContentFilter.currentrecord = arr;
};

// utility function to re/set the current record set.
var setCurrentPage = function(reset) {

	if(reset) {
		ContentFilter.pagination.options.current_page = jQuery("div.pagination:first span.current").eq(0).text()=="Show All" ? null : 0;
	} else {
		// reset start page for pagination, remember show all state
		var $page = jQuery("div.pagination:first span.current").eq(0);
		if($page.length) {				
			if($page.text()=="Show All") {
				ContentFilter.pagination.options.current_page = null;
			} else if(parseInt($page.text())==0 || $page.text()==ContentFilter.pagination.options.prev_text) {
				ContentFilter.pagination.options.current_page = 0;
			} else {
				ContentFilter.pagination.options.current_page = parseInt(jQuery("div.pagination:first span.current").text())-1
			}					
		} else {
			ContentFilter.pagination.options.current_page = 0;
		}	
	}
};
		
// receives record set and current page index.
// called from pageselectCallback
// record set may be global, but must be passed in as some cases have more than one set
// structure is used for instance where more than one content layouot
var getNewContent = function(records, page_index, structure) {

	var struct = structure || getItemContent;

	var max_elem = Math.min((page_index + 1) * ContentFilter.pagination.options.items_per_page, records.length);

	// Iterate through a selection of the content and build an HTML string
	var newcontent = ContentFilter.contentstart;
	
	// fork for alpha listing
	if(ContentFilter.mode == "alphalist") {
		
		// alpha list
		
		if (page_index != null) {
			// Show page
			var set = [];
			for(var i = page_index * ContentFilter.pagination.options.items_per_page; i < max_elem; i++) {
				set.push(records[i]); 
			}
			newcontent += struct(set);
		} else {
			// Show all
			newcontent += struct(records);      
		}			
		
	} else {
		
		// not alpha list
		
		if (page_index != null) {
			// Show page
			for(var i = page_index * ContentFilter.pagination.options.items_per_page; i < max_elem; i++) {
				var item = records[i]; 
				newcontent += struct(item);
			}
		} else {
			// Show all
			for(var i = 0; i < records.length; i++)	{
				var item = records[i]; 
				newcontent += struct(item);
			}        
		}		
		newcontent += ContentFilter.contentend;	
	}
	
	return newcontent;
	
};

// record set toggle
// checks ContentFilter.records for each direct child and creates active link toggle for it
// Only fires if item with class="content-filter-toggle" is on page and replaces all content of that element
// Actives content matched to what is currently in element
var contentFilterToggle = function($obj) {
	
	// reference for default item
	var filters  	= [],
		html		= "",
		length, text;
	
	// loop each parent object and create array
	jQuery.each(ContentFilter.records,function(i,val){								 
		filters.push(i);	
	});
	
	// sort array and set defaults
	filters = filters.sort().reverse();
	length 	= filters.length;
	text 	= filters[0];
	
	// build control html and insert
	for(var i = 0; i < length; i++) {
		html += filters[i] == text ? '<span>'+filters[i].replace(/_/g," ")+'</span>' : '<a href="#'+filters[i]+'">'+filters[i].replace(/_/g," ")+'</a>';
		html += length-1 != i ? " | " : "";
	}
	jQuery("p.content-filter-toggle").html(html);
	
	// set action for each link click
	jQuery("p.content-filter-toggle a").live("click",function(){
	
		// set some references
		var $obj 	= jQuery(this),
			text 	= $obj.text();
			$parent	= $obj.parents("p.content-filter-toggle")
			oldtext = jQuery("span",$parent).text();
	
		// change all spans into a's
		jQuery("span",$parent).replaceWith('<a href="#'+oldtext.replace(/ /g,"_")+'">'+oldtext+'</a>');
		
		// change current a into span
		$obj.replaceWith('<span>'+text+'</span>');

		// initialize paginate with page reset	
		initPagination(ContentFilter.records[text.replace(/ /g,"_")],true);	
		
		return false;
		
	});	
	
	// initialize paginate	
	initPagination(ContentFilter.records[text]);

};


/*	--------------------------------------------------------------------------------------------------------------------

	Filtering from form fields
	Tied to pagination

	Runs automatically if form.form-filter-list is on page	
	
*/	

// initialize Filtering
// triggers pagination
var initFiltering = function() {

	// set up type reference for each select based on id of style filterlist-xxxx
	jQuery("form.form-filter-list select,form.form-filter-list input").each(function(){	
		jQuery(this).data("filtertype",jQuery(this).attr("id").split("-")[1]);
	});
	
	// filter
	jQuery("form.form-filter-list").submit(function(e){
																		
		// maintain complete set reference, points to global records var
		ContentFilter.currentrecord = ContentFilter.records;
		
		// parse select options by running each through filterRecords function		
		jQuery("select",this).each(function(){
			if(typeof jQuery(this).val() == "string" && jQuery(this).val()!="all" && jQuery.trim(jQuery(this).val())!="") {				
				// pass type and normalized value					
				ContentFilter.currentrecord = filterRecords(jQuery(this).data("filtertype"),jQuery(this).val().toLowerCase());					
			}
		});
		jQuery("input",this).each(function(){			
			if(jQuery(this).val() && jQuery.trim(jQuery(this).val())!="") {
				
				// if rel is set, check in each of those columns, else only look in the filtertype
				if(typeof jQuery(this).attr("rel") != "undefined") {
					
					// this filter is additive rather than subtractive so needs additional logic
					var records = [];
					
					var columns = jQuery(this).attr("rel").split(" "),
						query 	= jQuery.trim(jQuery(this).val().toLowerCase());
					
					for(var i=0,length=columns.length;i<length;i++) {
						jQuery.each(filterRecords(columns[i],query),function(){	
							if(jQuery.inArray(this,records)==-1){
								records.push(this);			  
							}
						});	
					}					
					ContentFilter.currentrecord = records;					
			
				} else {
					// pass type and normalized value					
					ContentFilter.currentrecord = filterRecords(jQuery(this).data("filtertype"),jQuery.trim(jQuery(this).val().toLowerCase()));					
				}
			}					
		});
	
		// maintain sort
		var $sorted = jQuery("th a.dsc, th a.asc");
		sortColumn($sorted,{ dir : $sorted.attr("class") == "dsc" ? "asc" : "dsc" });
	
		// initialize paginate with page reset	
		initPagination(ContentFilter.currentrecord,true);		
		
		// prevent form submit
		return false;	
		
	}); // end submit;
	
	// reset filterlist form
	jQuery("#clear-filters").click(function(e){
		jQuery(this).parents("form.form-filter-list").trigger("reset").trigger("submit");
		e.preventDefault();
	});
		
	// initialize paginate	
	initPagination(ContentFilter.records);	

};
// filtering logic
// receives type to filter in records set and value to filter for
var filterRecords = function(type,val) {

	var temp = [];
	// add all matches to temp array and return
	for(var i=0, length=ContentFilter.currentrecord.length; i<length; i++){				
		if(ContentFilter.currentrecord[i][type].toLowerCase() == val || ContentFilter.currentrecord[i][type].toLowerCase().indexOf(val) != -1) {
			temp.push(ContentFilter.currentrecord[i]);
		}
	}
	return temp;
	
};


/*	--------------------------------------------------------------------------------------------------------------------

	Toggle Content type
	
	Toggles based on radio inputs
	Sets .content-title to value of radio label

*/
// triggers paginate
var toggleContent = function() {
	
	// get current selected content type
	var content = jQuery(this).val().toLowerCase();
	var title = jQuery(this).parent("label").text();
	
	// show only current table
	jQuery("table.toggledcontent").hide();
	jQuery("#"+content+"-Pagination-Content").show();
	
	// set title
	jQuery("h3.content-title").text(title);
	
	// set these for reference in tablesort and pagination
	ContentFilter.currentrecord = ContentFilter.records[content];
	ContentFilter.callbacktype = content;

	// initialize paginate with page reset	
	initPagination(ContentFilter.currentrecord,true);	

};
		
// toggle alpha content type
// sets status for current selection
// triggers paginate
var toggleAlphaContent = function() { 		

	// get current selected content type
	ContentFilter.alphalist.loc = jQuery(this).val().toLowerCase();
	ContentFilter.alphalist.current_alpha = "";
	ContentFilter.currentrecord = ContentFilter.records[ContentFilter.alphalist.loc];
	
	// initialize paginate with page reset
	initPagination(ContentFilter.currentrecord,true);	
	
	jQuery("div.listing-alpha").html(createAlphaList());
	
};	



/*	--------------------------------------------------------------------------------------------------------------------

	Alpha list 
	
	Tied to jQuery pagination plugin.
	
*/
// initialize the Alpha list
var initAlpha = function(){	

	// prevent empty pagination
	ContentFilter.paginated = true;

	// placeholders for sorting
	ContentFilter.currentrecord = [];	
	setAlphaKeys();	

	// bind change to radio buttons to toggle content
	jQuery("form.form-alpha-list input:radio").bind("click",toggleAlphaContent);
	
	// show some content on page load if an item is checked
	jQuery("form.form-alpha-list input:checked").trigger("click");
	
	// create empty alpha list
	jQuery("div.listing-alpha").html(createAlphaList());			
	jQuery("div.listing-alpha a").live("click",alphaToggle);

	// prevent the form from submitting
	jQuery("form.form-alpha-list").submit(function(e){ e.preventDefault(); });
		
};
// set a reference of keys
var setAlphaKeys = function() {	
	// set up keys alpha list creation once
	ContentFilter.alphalist.keys = {};
	jQuery.each(ContentFilter.records,function(k,v){		
		ContentFilter.alphalist.keys[k] = [];
		var obj = this;			
		jQuery.each(obj,function(i){
			if(jQuery.inArray(obj[i][0],ContentFilter.alphalist.keys[k])==-1) {
				ContentFilter.alphalist.keys[k].push(obj[i][0]);	
			}				 				
		});
	});	
};
// build the alpha selection list		 
var createAlphaList = function() {	
	var html = "<p>";
	html += ContentFilter.currentrecord.length ? '<a class="showall current" href="#showall">Show All</a> | ' : '<span class="inactive">Show All</span> | '
	for(var i=1; i <= 26; i++){
		var char = String.fromCharCode(64+i);
		html += ContentFilter.currentrecord.length && jQuery.inArray(char.toLowerCase(),ContentFilter.alphalist.keys[ContentFilter.alphalist.loc]) != -1 ? '<a href="#'+char.toLowerCase()+'">'+char+'</a>' : '<span class="inactive">'+char+'</span>';
		html += i==26 ? "" : " | ";
	}			
	html += "</p>";
	return html;			
}
// toggle currrent alpha item on alphalist click
// triggers paginate
var alphaToggle = function(e) {
	
	jQuery("div.listing-alpha a").removeClass("current");
	jQuery(this).addClass("current");
	ContentFilter.alphalist.current_alpha = jQuery(this).attr("href").split("#")[1];
	
	// clear old set
	ContentFilter.currentrecord = [];
	
	// if showall, make entire location set. else add only those with current alpha
	if(ContentFilter.alphalist.current_alpha=="showall") {
		ContentFilter.currentrecord = ContentFilter.records[ContentFilter.alphalist.loc];
	} else {
		jQuery.each(ContentFilter.records[ContentFilter.alphalist.loc],function(i){					
			if(this[0]==ContentFilter.alphalist.current_alpha) {
				ContentFilter.currentrecord.push(this);
			}				
		});
	}
	
	// make sure it didn't end up empty
	ContentFilter.currentrecord = !ContentFilter.currentrecord.length ? ContentFilter.records[ContentFilter.alphalist.loc] : ContentFilter.currentrecord;

	// initialize paginate with page reset	
	initPagination(ContentFilter.currentrecord,true);
	
	e.preventDefault();	
}			



/*	--------------------------------------------------------------------------------------------------------------------

	Custom table sorting
	Hooks with jquery pagination plugin	

	Expects pagination plugin to be active on the page and the records object to be set
	Reference ut-7.html for example of HTML structure required
	
	ContentFilter object dependencies:
	
		1. imgpath
		2. arrowup
		3. arrowdown		
	
*/

// init table sorting. sets up structure and attaches element events
// wrapped in closure to maintain $ var without conflict
var initTableSort = function() {
	(function($) { 
		// set up type reference for each table column
		$("th.sortable a").each(function(){
			var fullclass 	= $(this).parents("th").attr("class");			
			var classindex 	= fullclass.indexOf("key-");	
			$(this)[0].key	= fullclass.substring(classindex+4);				
		});	
		
		// initialize sorting
		$("th a.dsc, th a.asc").each(function(){				
			setHeader($(this),$(this).attr("class"));				
		});	
		
		// tablesort
		$("th.sortable a").click(function(e){
			
			var $this 	= $(this);				
			var status 	= { dir : $this.attr("class") || "asc" };
			
			sortColumn($this,status);			// triggers pagination
			setHeader($this,status.dir);
		
			e.preventDefault();
		
		});

		// prevent no-sort
		$("th.no-sort a").click(function(e){ e.preventDefault(); });

	})(jQuery);
};	
// column sorting
// receives element (th link that was clicked) and properties object which contains sort direction
// triggers pagination
var sortColumn = function(el,prop) {
	
	var key = el[0].key;			
	ContentFilter.currentrecord.sort(
		function sortByAlpha(a, b) {
			var x = a[key].toLowerCase();
			var y = b[key].toLowerCase();
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		}
	);
	if(prop.dir=="dsc") { ContentFilter.currentrecord.reverse(); }			
		
	// initialize paginate	
	initPagination(ContentFilter.currentrecord);	
				
};
// sets table headers to reflect new sorting
// receives jquery object of 
var setHeader = function($el,direction) {	
			
	var sorted = {
		classname 	: direction == "asc" ? "dsc" : "asc",
		alt			: direction == "asc" ? "Sorted descending" : "Sorted ascending",
		img			: direction == "asc" ? ContentFilter.arrowup : ContentFilter.arrowdown
	};
			
	$el.parents("tr").find("th.sortable a").attr("class","").find("img").remove();	
	$el.addClass(sorted.classname).append('<img alt="' + sorted.alt + '" src="' + ContentFilter.imgpath + sorted.img + '" />');
	
};
