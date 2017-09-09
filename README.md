# blog_style

En blogg applikation som hämtar och lagrar data från er egen databas i Firebase.
För att skapa applikationen används man React (create-react-app) och redux för user's verifiering.

Hur redux fungerar i min applikation:
1. När användare klickar på "Log in" knappen, kallas en function som heter handleSubmit(email, password) från components-mappen.
2. Funktionen utför lokala kontroller av email och lösenord och om de är korrekta, kallar en funktion signInUser från actions-mappen.
3. Om det är OK, säger reduser authenticated: true.
I redusers-mappen ställs villkoren för hur applicationen ska fungera. I actions-mappen finns actions eller stegen som utförs när programmet körs.

En navigation mellan menyalternativ görs med hjälp av react-router.

Vad man kan göra på applikationen:
* logga in med email (test user: login: admin@gmail.com, lösenord: admin123),
* logga in med Facebook,
* det finns loader på login-sidan när man loggar in,
