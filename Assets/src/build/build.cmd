@echo off

if [%1]==[] goto usage

for %%X in (node.exe) do (set FOUND=%%~$PATH:X)
if not defined FOUND (
	echo Node.exe is not in the PATH. Install Node.js or temporarily modify the PATH for a portable install.
	exit /b 1
)

for %%X in (npm) do (set FOUND=%%~$PATH:X)
if not defined FOUND (
	echo npm is not in the PATH. Install Node.js or temporarily modify the PATH for a portable install.
	exit /b 1
)

cd /d "%~dp0\.."

REM check for a missing node_modules folder, which definitely means we need to npm install
if not exist sassdoc-theme/node_modules GOTO :sassdoc_theme_npm_install
if not exist node_modules GOTO :npm_install

REM in production we want to always use npm install; this will prevent CI builds from failing due to missing deps
if '%1' == 'production' GOTO :npm_install

:run_gulp
node node_modules\gulp\bin\gulp.js %1

if %errorlevel% neq 0 (
	if [%noretry%] == [] (
		echo Build failed - exit %errorlevel%. Attempting npm install in case of out of date or new dependencies.
		GOTO :sassdoc_theme_npm_install
		GOTO :npm_install
	)

	echo Build failed both attempts. Aborting.
	exit /b %errorlevel%
)

exit /b 0

:sassdoc_theme_npm_install
REM don't ask why you need to cmd /c this, but if you don't the script exits thereafter without running gulp!
echo Running npm install for Sassdoc theme
cmd /c "cd sassdoc-theme && npm install"
if %errorlevel% neq 0 (
	echo npm install exited with code %errorlevel%
	exit /b %errorlevel%
)

:npm_install
REM don't ask why you need to cmd /c this, but if you don't the script exits thereafter without running gulp!
echo Running npm install
cmd /c "npm install"
if %errorlevel% neq 0 (
	echo npm install exited with code %errorlevel%
	exit /b %errorlevel%
)

REM this noretry flag is used to prevent the build from retrying npm install to fix itself more than once
REM (except for watches, which restart infinitely)

if '%1' NEQ 'watch' (
	SET noretry=1
)
GOTO :run_gulp

:usage
echo Usage: %0 ^<GulpTaskName^>
exit /b 1