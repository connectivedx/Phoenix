// classes for nth-child elements
$('.two-up:nth-child(n+2), .three-up:nth-child(n+2), .four-up:nth-child(n+2)').addClass('nth-child-np2');
$('.two-up:nth-child(2n+1), .four-up:nth-child(2n+1), .nav-tertiary-col:nth-child(2n+1)').addClass('nth-child-2np1');
$('.two-up:nth-child(n+3), .four-up:nth-child(n+3), .nav-tertiary-col:nth-child(n+3)').addClass('nth-child-np3');
$('.three-up:nth-child(3n+1)').addClass('nth-child-3np1');
$('.three-up:nth-child(n+4)').addClass('nth-child-np4');
$('.four-up:nth-child(4n+1)').addClass('nth-child-4np1');
$('.four-up:nth-child(n+5)').addClass('nth-child-np5');