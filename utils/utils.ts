import * as Yup from 'yup';
import { IProduct } from "./types";

export function kebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
}

export function getShortDescription(description: string) {
  const words = description.split(` `);
  if (words.length > 15) return words.slice(0,15).join(` `).concat(`...`)
  return description
}

export const validate = {
  email: Yup
    .string()
    .email('Nieprawidłowy adres Email')
    .required('Adres Email jest wymagany'),
  password: Yup
    .string()
    .required('Hasło jest wymagane.')
    .min(8, 'Twoje hasło jest zbyt krótkie - powinno mieć przynajmniej 8 znaków.'),
  confirmPassword:  Yup
    .string()
    .required('Potwierdzenie hasła jest wymagane.')
    .oneOf([Yup.ref('password'), null], 'Oba hasła muszą być takie same.')
}

// Do usunięcia w niedalekiej przyszłości

import pic1 from "../public/img/pic1.jpg";
import pic2 from "../public/img/pic2.jpg";
import pic3 from "../public/img/pic3.jpg";
import pic4 from "../public/img/pic4.jpg";
import pic5 from "../public/img/pic5.jpg";
import pic6 from "../public/img/pic6.jpg";
import pic7 from "../public/img/pic7.jpg";

export const lorem = `Jedna z najpiękniejszych na świecie tablic manipulacyjnych. Nie dość, że cieszy oko, to jeszcze bawi dziecko. Czego rodzic mógłby chcieć więcej? No może trzy godzinki więcej snu.`

export const dummyProducts: Array<IProduct> = [
  {
    id: "1",
    createdBy: "ciKIx7stxFXEQUvCyySpTGQUPbJ3",
    name: "Słonik",
    slug: "slonik",
    price: 499,
    description: lorem,
    images: [pic1, pic2, pic3],
    dimensions: {
      width: 150,
      height: 100
    }
  },
  {
    id: "2",
    createdBy: "abc",
    name: "Zebra",
    slug: "zebra",
    price: 399,
    description: lorem,
    images: [pic4, pic5, pic1],
    dimensions: {
      width: 100,
      height: 50
    }
  },
  {
    id: "3",
    createdBy: "abc",
    name: "Kotek",
    slug: "kotek",
    price: 799,
    description: lorem,
    images: [pic7, pic3, pic2],
    dimensions: {
      width: 200,
      height: 150
    }
  },
  {
    id: "4",
    createdBy: "abc",
    name: "Piesek",
    slug: "piesek",
    price: 400,
    description: lorem,
    images: [pic6, pic5, pic7, pic3],
    dimensions: {
      width: 150,
      height: 150
    }
  }
]