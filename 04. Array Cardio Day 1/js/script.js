(function() {
  //Consts

  //Data members

  //Functions
  function main() {
    // Some data we can work with
    const inventors = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
      },
      {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
      },
      {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
      },
      {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
      },
      {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
      },
      {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
      },
      {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
      },
      {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
      },
      {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
      },
      {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
      },
      {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
      },
      {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
      }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    var filteredInventors = inventors.filter(el => el.year >= 1500 && el.year < 1599);
    console.log("1. Filter the list of inventors for those who were born in the 1500's", filteredInventors);

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    var inventorsNames = inventors.map(el => el.first + " " + el.last);
    console.log("2. Give us an array of the inventors' first and last names", inventorsNames);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    var sortedInventorsBirthdate = inventors.sort((a,b) => a.year - b.year);
    console.log("3. Sort the inventors by birthdate, oldest to youngest");
    console.table(sortedInventorsBirthdate);


    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    var totalAge = inventors.map(el => el.passed - el.year).reduce((acc, val) => acc + val);
    console.log("4. How many years did all the inventors live?", totalAge);

    // 5. Sort the inventors by years lived
    var sortedInventorsAge = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
    console.log("5. Sort the inventors by years lived");
    console.table(sortedInventorsAge);


    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // var links = Array.from(document.querySelectorAll(".mw-category-group a"))
    // var filteredText = links.map(a => a.textContent).filter(t => t.includes("de"))
    // console.log(filteredText)
    console.log("6. create a list of Boulevards in Paris that contain 'de' anywhere in the name", null);

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    var sortedPeopleByLastName = people.sort(function(a, b) {
      var lastA = a.split(", ")[0];
      var lastB = b.split(", ")[0];
      if (lastA.toUpperCase() < lastB.toUpperCase()) {
        return -1;
      }
      if (lastA.toUpperCase() > lastB.toUpperCase()) {
        return 1;
      }
      return 0;
    });
    console.log("7. Sort the people alphabetically by last name", sortedPeopleByLastName);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
    var dataSum = data.reduce(function(acc, val){
      if (!acc[val]){
        acc[val] = 0;
      }
      acc[val]++;
      return acc;
    }, {});
    console.log("8. Sum up the instances of each of these", dataSum);

  }

  //Execution
  main();
})();
