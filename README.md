# will be modified gradually

- new branch (lesson#) = new functionality of the page;
- ui branch is for refactoring and changing exciting codebase

### Authentication

- redirect-ები იმართება middleware.js ფაილიდან. აპლიკაციაში არსებული ყველა route მოწმდება (გათვალისწინებულია დინამიური გვერდებიც) და თუ cookie-ში token არ არსებობს redirect აკეთებს login გვერდზე;
- login ფეიჯი თავის თავს "მართავს" და გადაწყვეტს, cookie თუ არსებობს, მხოლოდ ამ შემთხვევაში გადა-redirect-ებს "/"-ზე. შესაბამისად login შეუღწევადი ხდება.
- logout ღილაკი (გამოიყენება მხოლოდ ნავიგაციაში) შლის ყველა cookie-ს და router.refresh() მეთოდით login გვერდზე ამისამართებს მომხმარებელს. refresh მეთოდით შეუღწევადი ხდება დანარჩენი აპლიკაცია
- BUG : ქუქის ბრაუზერის სთორიჯიდან წაშლის შემთხვევაში აპლიკაციას რეაგირება არ/ვერ აქვს და მაინც შესაძლებელია მისი ყველა ფუნქციონალის გამოყენება
