# Wstęp

Wiele interaktywnych aplikacji internetowych skupia się na aspektach technicznych jakie ma posiadać tworzone programowanie: jaki wybrać język, w jaki sposób pobierać i zapisywać dane, ale często wśród osób, które są odpowiedzialne za implementacje interfejsów użytkownika zapomina się o wrażeniach użytkownika, nie analizuje się tego jak wygodniej będzie użytkownikowi obsłużyć interfejs, a jedynie skupia się wyłącznie na tym, aby aktualnie implementowana funkcjonalność działała tak jak opisano to w wymaganiach klienta lub osoby, która jest odpowiedzialna za nadzór nad pracą programistów w firmie. 

## W tym projekcie znajduje się

- [Wstęp](#wstęp)
  * [Uzasadnienie powstania aplikacji](#uzasadnienie-powstania-aplikacji)
  * [Główne założenia](#główne-założenia)
  * [Technologie użyte w projekcie](#technologie-użyte-w-projekcie)
  * [Galeria](#galeria)
  
## [🎈 Wersja Live](https://goodideagiver.github.io/mobilo-app/)

## Uzasadnienie powstania aplikacji

Ubezpieczalnia oferuje usługę transportową dla klientów, którzy wykupią odpowiedni zakres ubezpieczenia auta. Ta usługa posiada szereg skomplikowanych zależności oraz wyłączenia, przez które rozliczanie jej jest utrudnione. 

Usługa jest zawierana umową w relacji ubezpieczalnia – klient, ale wykonawcą usługi jest serwis samochodowy, który zawarł umowę z ubezpieczalnią na ramach, której ją może wykonywać i to serwis samochodowy rozlicza z ubezpieczalnią wykonane czynności zaoferowane klientowi. Klient nie ponosi żadnych kosztów, usługa z góry powinna być wykonana nieodpłatnie i serwis ponosi odpowiedzialność za oferowane usługi i poprawne zaoferowanie ich klientowi. 

## Główne założenia

Moimi głównymi założeniami podczas tworzenia tej aplikacji było: 

- Przystępność dla użytkowników początkujących oraz zaawansowanych 
- Każdy przycisk po najechaniu wyświetla informację o jego funkcji, co jest przydatne dla użytkowników dopiero zaczynających korzystanie z aplikacji. 
- Po całej aplikacji można poruszać się za pomocą klawiatury, co jest przydatne dla użytkowników, którzy mają trudności w korzystaniu z myszki, oraz dla użytkowników zaawansowanych, którzy chcą obsługiwać aplikację w bardziej wydajny sposób. 

## Technologie użyte w projekcie

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![CharkaUI](https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white)
![Zustand](https://img.shields.io/badge/zustand-%FFFFFF.svg?style=for-the-badge&logo=react&logoColor=%FFFFFF)

## Galeria

Widok główny interfejsu użytkownika charakteryzuje się minimalistycznym wyglądem, elementy wizualne są odpowiednio pogrupowane. Postanowiłem zastosować ułożenie kontrolek aplikacji na górze ekranu, jest to powszechna praktyka w programach wielu producentów, dlatego, aby skorzystać z przyzwyczajenia użytkowników z innych rozwiązań zdecydowałem, że ten układ będzie najlepszy.

![image](https://user-images.githubusercontent.com/55458485/226565175-81db5c71-3b5c-403a-88ca-72b64b1d4977.png)

Widok aplikacji z wybranymi przez użytkownika usługami, których nie można ze sobą łączyć.

![image](https://user-images.githubusercontent.com/55458485/226566022-075c9fe8-d9a9-435d-8cb7-b6c28d903e11.png)

Wskazywanie niekompatybilnych ze sobą usług to nie jest jedyna funkcja walidacji danych w aplikacji, dodatkową metodą walidacji w aplikacji jest również wskazywanie braku wprowadzonych przez użytkownika danych. Dobrym przykładem tego rozwiązania będzie usługa użyczenia auta zastępczego klientowi. Kiedy pola tej usługi nie są wypełnione, model auta zastępczego nie jest wybrany ani ilość dni wypożyczenia auta nie jest określona w polu tekstowym usługi wyświetla się odpowiedni komunikat błedu oraz ramka wokół pola zmienia kolor na czerwony, aby zwrócić uwagę użytkownika.

![image](https://user-images.githubusercontent.com/55458485/226566495-94101047-c2bf-4031-add9-4ead0a5a6261.png)

Menu boczne w aplikacji postanowiłem ukryć pod przyciskiem w lewym górnym rogu, dzięki temu nie mamy tutaj do czynienia z marnowaniem przestrzeni ekranu poprzez menu boczne, które nie jest aktywnie używane przez użytkownika. W menu bocznym pogrupowałem też usługi w takie, które można wykonać przed naprawą oraz takie, które można wykonać po naprawie, jest to dodatkowy przydatny wskaźnik dla użytkownika, oraz dobre wizualne rozróżnienie usług pod kątem wymagań biznesowych.

![image](https://user-images.githubusercontent.com/55458485/226566315-7285686d-68b0-449e-91dd-f03bd78cc7ed.png)

Wszystkie przyciski w aplikacji są ikonkami, pozwala to otrzymać nam interfejs użytkownika, który jest bardziej skondensowany w swoim wyglądzie, ale niesie to za sobą pewne wady, ponieważ użytkownicy, którzy nie są w stanie zapamiętać funkcji każdego przycisku nie będą wiedzieli do czego one służą. Postanowiłem rozwiązać ten problem za pomocą funkcjonalności, która wyświetla podpowiedź z informacją do czego służy przycisk natychmiastowo zaraz po najechaniu na niego myszką.

![image](https://user-images.githubusercontent.com/55458485/226566658-136a792d-8286-46a8-a5f5-c8c6814db065.png)

Dla zaawansowanych użytkowników w aplikacji istnieje przełącznik, który pozwala na ukrycie informacji, które dla użytkownika zaawansowanego nie będą przydatne. Są to głównie informacje uzupełniające dla grup kontrolek, przykładowo taką informacją jest podpis pod sumą wszystkich usług: „Całkowita wartość usług”. Wyłączenie tych podpisów pozwala użytkownikowi na przeznaczenie więcej miejsca na ekranie na główną funkcjonalność programu jaką jest lista wybranych usług.

![image](https://user-images.githubusercontent.com/55458485/226566724-bd015768-fc5b-49b6-b678-44eacae01da5.png)

Kolejną przydatną funkcjonalnością dla zaawansowanych użytkowników oraz dla użytkowników, którzy mają trudności w korzystaniu z myszy komputerowej jest funkcja skrótów klawiszowych. Po przytrzymaniu klawisza SHIFT na klawiaturze pod kontrolkami aplikacji wyświetlają się litery, które po wciśnięciu wykonają akcję odpowiednią dla przycisków, pod którymi się znajdują. Przykładowo skrót SHIFT + R zresetuje wszystkie wybrane usługi.

![image](https://user-images.githubusercontent.com/55458485/226566777-9f99a118-7cf3-48a9-860c-9cd2333cfb6e.png)

Podobne rozwiązanie istnieje w programie Word stworzonym przez firmę Microsoft. Po wciśnięciu klawisza ALT w tak zwanej „wstążce” wyświetlają się litery jakie należy wcisnąć aby aktywować przycisk, obok którego się znajdują.

![image](https://user-images.githubusercontent.com/55458485/226566860-abccf5dd-e065-473f-b129-a8eafcff2000.png)

