import { site } from "@/lib/content";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MedicalBusiness"],
        "@id": `${site.url}/#business`,
        name: site.shortName,
        description:
          "Consultório de nutrição clínica e esportiva de Gabriella Ferreira Schmalh em São José dos Campos, com atendimento também online.",
        url: site.url,
        image: `${site.url}/images/gabriella-retrato.png`,
        telephone: `+${site.whatsappNumber}`,
        email: site.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address.line1}, ${site.address.line2}`,
          addressLocality: site.city,
          addressRegion: site.uf,
          postalCode: site.address.zip,
          addressCountry: "BR",
        },
        areaServed: {
          "@type": "City",
          name: site.city,
        },
        sameAs: [site.instagramUrl],
        employee: { "@id": `${site.url}/#gabriella` },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.googleRating.average.replace(",", "."),
          reviewCount: site.googleRating.count,
        },
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#gabriella`,
        name: site.name,
        jobTitle: site.role,
        url: `${site.url}/sobre`,
        image: `${site.url}/images/gabriella-retrato.png`,
        worksFor: { "@id": `${site.url}/#business` },
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "UNESP" },
          { "@type": "CollegeOrUniversity", name: "Universidad de Santiago de Compostela" },
        ],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Registro profissional",
          name: site.crn,
        },
        sameAs: [site.instagramUrl],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
