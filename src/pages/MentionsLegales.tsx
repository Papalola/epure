import Layout from "@/components/Layout";

const MentionsLegales = () => (
  <Layout>
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="font-display text-3xl font-bold mb-12 text-foreground">MENTIONS LÉGALES</h1>

      <section className="mb-12 space-y-2 text-muted-foreground text-sm leading-relaxed">
        <h2 className="font-display text-lg font-semibold text-foreground mb-4">Éditeur du site</h2>
        <p>Epure — David BADIN</p>
        <p>Entrepreneur Individuel</p>
        <p>SIRET : 10209784700010</p>
        <p>30 Boulevard de Sébastopol</p>
        <p>75004 Paris</p>
        <p>France</p>
        <p>Code APE : 7112B</p>
        <p className="mt-4">Email : <a href="mailto:contact@epure-db.com" className="underline hover:text-foreground">contact@epure-db.com</a></p>
        <p>Téléphone : <a href="tel:+33688813086" className="underline hover:text-foreground">+33 6 88 81 30 86</a></p>
      </section>

      <section className="mb-12 space-y-2 text-muted-foreground text-sm leading-relaxed">
        <h2 className="font-display text-lg font-semibold text-foreground mb-4">Hébergement</h2>
        <p>Lovable Labs Incorporated</p>
        <p>1111B South Governors Avenue, Dover, DE 19904, USA</p>
        <p><a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">https://lovable.dev</a></p>
      </section>

      <section className="mb-16 space-y-2 text-muted-foreground text-sm leading-relaxed">
        <h2 className="font-display text-lg font-semibold text-foreground mb-4">Directeur de publication</h2>
        <p>David BADIN</p>
      </section>

      <hr className="border-border mb-16" />

      <h1 className="font-display text-3xl font-bold mb-12 text-foreground">CONDITIONS GÉNÉRALES DE VENTE</h1>

      {[
        { title: "ARTICLE 1 — OBJET", content: "Les présentes CGV définissent les modalités de réalisation des prestations de services proposées par Epure — David BADIN dans les domaines de la modélisation BIM et de l'expertise agencement." },
        { title: "ARTICLE 2 — PRESTATIONS", content: "Les prestations comprennent notamment :", list: ["Modélisation BIM (Revit, AutoCAD)", "Production de plans et détails techniques", "Assistance MOE BIM et agencement", "Études d'aménagement intérieur", "Coordination et suivi de réalisation"], after: "Le détail précis des prestations est défini dans le devis accepté par le client." },
        { title: "ARTICLE 3 — DEVIS ET COMMANDE", content: "Toute commande devient ferme après signature du devis ou validation écrite par le client. Le devis est valable 30 jours à compter de sa date d'émission." },
        { title: "ARTICLE 4 — TARIFS", content: "Les prestations sont facturées selon le tarif journalier (TJM) ou forfaitaire indiqué dans le devis. Les prix sont exprimés hors taxes (HT). La TVA applicable sera précisée selon le régime fiscal en vigueur." },
        { title: "ARTICLE 5 — CONDITIONS DE PAIEMENT", content: "Sauf mention contraire sur le devis, les factures sont payables à 30 jours à compter de leur date d'émission, par virement bancaire." },
        { title: "ARTICLE 6 — RETARD DE PAIEMENT", content: "Tout retard de paiement entraînera :", list: ["Des pénalités calculées au taux légal en vigueur", "Une indemnité forfaitaire pour frais de recouvrement de 40 €"] },
        { title: "ARTICLE 7 — MODIFICATION DE PRESTATION", content: "Toute demande de modification ou prestation supplémentaire fera l'objet d'un devis complémentaire soumis à validation écrite du client." },
        { title: "ARTICLE 8 — RESPONSABILITÉ", content: "Le prestataire est tenu à une obligation de moyens. Sa responsabilité ne saurait être engagée en cas d'utilisation incorrecte des documents livrés par le client ou par des tiers. La responsabilité du prestataire est limitée au montant de la prestation facturée." },
        { title: "ARTICLE 9 — VALIDATION CLIENT", content: "Le client est responsable de la validation finale des documents fournis. Toute validation écrite vaut acceptation définitive." },
        { title: "ARTICLE 10 — PROPRIÉTÉ INTELLECTUELLE", content: "Les documents produits restent la propriété intellectuelle du prestataire jusqu'au paiement complet de la prestation. Après règlement, les droits d'utilisation sont transférés au client dans le cadre défini par le devis." },
        { title: "ARTICLE 11 — CONFIDENTIALITÉ", content: "Le prestataire s'engage à respecter la confidentialité des informations communiquées par le client dans le cadre des missions confiées." },
        { title: "ARTICLE 12 — DROIT APPLICABLE ET LITIGES", content: "Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les tribunaux compétents du ressort de Paris seront saisis." },
      ].map((article) => (
        <section key={article.title} className="mb-10 text-sm leading-relaxed">
          <h2 className="font-display text-base font-semibold text-foreground mb-3">{article.title}</h2>
          <p className="text-muted-foreground">{article.content}</p>
          {article.list && (
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              {article.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {article.after && <p className="text-muted-foreground mt-2">{article.after}</p>}
        </section>
      ))}
    </div>
  </Layout>
);

export default MentionsLegales;
