@echo off
:START
echo Dansk = DAN
echo Matematik = MAT
echo Engelsk = ENG
echo Idræt = IDR
echo Musik = MUS
echo Kristendom = KRI
echo Natur/teknik = NT
echo USU = USU

set /p a=Hvilket fag kan du bedst lide? 
set /p b=Hvilket fag er der mest larm i? 

echo %a% >> sp1-5kl.txt
echo %b% >> sp2-5kl.txt
cls
goto start