export interface Partner {
  id: string;
  name: string;
  role: string;
  credential: string;
  avatar: string;
  bio: string[];
  contact: {
    whatsapp: string;
    whatsappFormatted: string;
    usaPhone?: string;
    email: string;
  };
  barMemberships?: string[];
}

export const partners: Partner[] = [
  {
    id: "parvez-hashem",
    name: "Parvez Hashem",
    role: "Founder & Partner",
    credential: "Advocate, Supreme Court of Bangladesh",
    avatar: "/images/parvez-hashem.jpg",
    bio: [
      "Parvez Hashem is a founding partner of Lexmates, bringing to the firm a rare breadth of legal and academic accomplishment that spans constitutional law, civil matters, immigration and international affairs.",
      "He holds an LL.B. and LL.M. from the Department of Law and Justice at Bangladesh University of Business and Technology, and an M.S.S. in Political Science from the University of Dhaka — a combination that gives him both the legal rigor and the policy insight that complex matters demand.",
      "A practicing Advocate of the Hon’ble Supreme Court of Bangladesh, Mr. Hashem is a registered member of the Bangladesh Supreme Court Bar Association, the Dhaka Bar Association, the Administrative Tribunal Bar Association and the Dhaka Taxes Bar Association.",
      "Beyond the courtroom, his work reaches across borders. He has participated in workshops and seminars on human rights and governance in the United States, the United Kingdom and Thailand. He is also a regular contributor to leading national newspapers, writing with authority on legal reform, governance, human rights and international affairs — reflecting a mind that engages with the law not just as a profession, but as a public responsibility.",
    ],
    contact: {
      whatsapp: "8801711943782",
      whatsappFormatted: "+880 1711-943782",
      usaPhone: "+1 813 568 6906",
      email: "parvez.lexmates@gmail.com",
    },
    barMemberships: [
      "Supreme Court Bar Association",
      "Dhaka Bar Association",
      "Administrative Tribunal Bar Association",
      "Dhaka Taxes Bar Association",
    ],
  },
  {
    id: "kamrul-islam-arif",
    name: "Kamrul Islam Arif",
    role: "Founder & Partner",
    credential: "Advocate & Legal Adviser",
    avatar: "/images/kamrul-islam-arif.png",
    bio: [
      "Kamrul Islam Arif is a founding partner of Lexmates, practicing across taxation, corporate compliance and commercial litigation.",
      "He holds an LL.B. from the Department of Law and Justice at Bangladesh University of Business and Technology.",
      "He serves as a trusted consultant on income tax, VAT and company law matters, advising clients as a practicing lawyer.",
      "He handles suits and cases across civil and criminal matters, and is a registered member of the Dhaka Bar Association and the Dhaka Taxes Bar Association.",
    ],
    contact: {
      whatsapp: "8801727145247",
      whatsappFormatted: "+880 1727-145247",
      email: "arif.advo@yahoo.com",
    },
    barMemberships: ["Dhaka Bar Association", "Dhaka Taxes Bar Association"],
  },
];
