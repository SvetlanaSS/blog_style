# blog_style

En blogg applikation som hämtar och lagrar data från er egen databas i Firebase.
För att skapa applikationen används man React (create-react-app) och redux för user's verifiering.

Hur redux fungerar i min applikation:
1. När användare klickar på "Log in" knappen, kallas en function som heter handleSubmit(email, password) från components-mappen.
2. Funktionen utför lokala kontroller av email och lösenord och om de är korrekta, kallar en funktion signInUser från actions-mappen.
3. Om det är OK, säger reduser authenticated: true.
I redusers-mappen ställs villkoren för hur applicationen ska fungera. I actions-mappen finns actions eller stegen som utförs när programmet körs.

En navigation mellan menyalternativ görs med hjälp av react-router.
Allt innehålet för alla menyalternativ hämtas från databasen en gång och sedan visas ett visst innehåll för det valda menyalternativet.

Vad man kan göra på applikationen:
* Logga in med email (test user: login: admin@gmail.com, lösenord: admin123).
  Det finns 2 valideringar: att en email-adress är valid och att ett lösenord måste vara minst 6 tecken långt. Om email-adressen eller lösenordet inte är korrekta, visas upp ett error.
* Logga in med Facebook,
* Det finns loader på login-sidan när man loggar in,
* Man kan navigera mellan olika menyalternativ och beroende på det valda menyalternativet visas ett visst innehåll,
* Man kan klicka på posttiteln, då öppnas inlägget i ett nytt modalfönster,
