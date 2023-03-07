const path = require("path");
// Używamy asynchroniczności ponieważ musimy teraz pobrać dane które
// wpompujemy dalej do sablonu. W pierszej kolejności robimy
// destrukturyzację dla zapytań query, oraz definiujemy coś, cos
// nazwyamy actions - element ten łaczy w sobie kilak metod które
// możemy użyć, jedną z nich jest GENERATE PAGES (generowanie stron)
exports.createPages = async ({ graphql, actions }) => {
  // Na początku pobieramy dane z zapytania query (chodzi nam o pliki MDX)
  // teraz dodajemy do zmiennej odebrane dane ze scieżką do konkretnego
  // pliku MDX - inaczej "slug". Jesto do inaczej alias każdej ze stron
  // która ma swoje dane do zaprezentowania, następnie zostanie wykonany
  // page route, czyli wygenerujemy powiazanie z tym pliakiem, poprzez
  // właśnie slug każdego z pików osobno.

  const { data } = await graphql(`
    query ProjectsRouts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  // Teraz dla każdego elementu z osobna wygenerujemy powiżanie
  // z sablonem do którego przekażemy unikatowy "slug", nastepnie
  // już wewnątrz JAKIEGOŚ PLIKU, odbierzemy ten slug i na jego
  // podstawie zrobimy zapytanie do danych poprzez data query

  data.allMarkdownRemark.nodes.forEach((node) => {
    return (
      // to jest metoda na podatawie której Gatsby wie jak
      // wygenerować naszą stronę, poprzez dobranie odpowiedniego
      // sazblonu i komponentów do niej przypisanego.
      actions.createPage({
        // to ejst sciezka do wykoniania Rout Page
        path: `/projects/` + node.frontmatter.slug,

        // Teraz definiujemy komponenty jakich chcemy użyć,
        // do wygenerowania tej strony. Do tego musimy miec
        // sciezke absolutną a nie dynamiczną do komponentu
        // w tym wypadku będzie to szablon
        component: path.resolve("./src/templates/project-details.js"),

        // Teraz definiujemy jakie treści chcemy przekazać do
        // szbalonu który utworzy, zrobimy to poprzez przekazanie
        // "slug" do danego pliku MDX, nastepnie w szablonie
        // wygenerujemy zapytanie query i wyświetlimy resztę
        // treści powizanych z stym przekazanym "slug"
        context: { slug: node.frontmatter.slug },
      })
    );
  });
};
