const arr = [
  'wykształcenie wyższe lub w trakcie studiów o profilu informatycznym ',
  'podstawowej znajomości zagadnień z obszaru wytwarzania oprogramowania, a także umiejętności pracy z repozytorium kodu',
  'otwartości na naukę, a także chęć podnoszenia kompetencji',
  'zdolności dobrej organizacji czasu i umiejętności łączenia zadań związanych z tworzeniem nowych elementów projektu, a bieżącym rozwiązywaniem problemów',
  'posługiwania się językami skryptowymi: bash, Python, Groovy, PowerShell, oraz narzędziem do zarządzania repozytorium kodu: git',
  'posługiwania się językiem angielskim w stopniu pozwalającym na swobodną komunikację',
];

// convert to object with id and taskDescription id starts with 20

const obj1 = arr.map((taskDescription, id) => ({
  id: id + 130,
  taskDescription,
}));

const obj2 = arr.map((taskDescription, id) => ({
  taskDescription,
}));

console.log(obj2);
