# blog_style

En blogg applikation som hämtar och lagrar data från er egen databas i Firebase.
För att skapa applikationen används man React (create-react-app) och redux för att spara ett globalt state.


En navigation mellan menyalternativ görs med hjälp av react-router.
Allt innehålet för alla menyalternativ hämtas från databasen en gång och sedan visas ett visst innehåll för det valda menyalternativet.

Vad man kan göra på applikationen:
* Logga in med email (test user: login: admin@gmail.com, lösenord: admin123).
  Det finns 2 valideringar: att en email-adress är valid och att ett lösenord måste vara minst 6 tecken långt. Om email-adressen eller lösenordet inte är korrekta, visas upp ett error.
* Det finns loader på login-sidan när man loggar in,
* Man kan navigera mellan olika menyalternativ och beroende på det valda menyalternativet visas ett visst innehåll,
* Man kan klicka på posttiteln, då öppnas inlägget i ett nytt modalfönster,
* Man kan gilla inlägg:
  * En användare kan inte rösta på samma post flera gånger.
  * En användare kan ta bort sin röst från en post.
  * Email-adress, som gillar post, visas upp i popup fönstret.
* Man kan kommentera inlägg. Email-adress, som kommenterar post, visas upp i popup fönstret.
* Man kan söka och filtrera i informationen som visas på sidan med hjälp av 3st fält:
  * checkbox "Today's posts" - i json fil finns det senaste inlägget för den 12 september,
  * checkbox "Most liked posts",
  * input-fält "Hachtag".


Man kan söka och filtera i informationen som visas på sidan med hjälp av minst 3st input-fält eller knappar (radio buttons etc.). Hämtar du recept så kan det t.ex. vara en checkbox som filtrerar efter vegetariska alternativ. Här kan du antingen välja att filtrera efter det redan existerande innehåller eller göra ett nytt kall mot din databas eller externt API.


Hur redux fungerar i min applikation (t.ex. för login):
1. När användare klickar på "Log in" knappen, kallas en function som heter handleSubmit(email, password) från components-mappen.
2. Funktionen utför lokala kontroller av email och lösenord och om de är korrekta, kallar en funktion signInUser från actions-mappen.
3. Om det är OK, säger reduser authenticated: true.
I redusers-mappen ställs villkoren för hur applicationen ska fungera. I actions-mappen finns actions eller stegen som utförs när programmet körs.

Vilka teknologier används i appen:
* create-react-app,
* react-redux,
* firebase som databasen,
* react-router,
* styled-components.
