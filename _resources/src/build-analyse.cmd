@echo off
echo Running Gulp Analysis Build...
cmd /c "%~dp0\build\build.cmd" analyse
if %errorlevel% neq 0 echo Build exited with code %errorlevel%

if not [%1]==[] exit /b %errorlevel%

PAUSE