@echo off
echo Adding all changes...
git add .

echo Enter commit message (or press Enter for default):
set /p commit_msg=
if "%commit_msg%"=="" set commit_msg=Update portfolio

echo Committing with message: %commit_msg%
git commit -m "%commit_msg%"

echo Pushing to GitHub...
git push origin master

echo Done! Changes have been pushed to GitHub.
pause
