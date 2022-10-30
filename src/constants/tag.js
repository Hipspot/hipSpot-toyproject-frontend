export const tags = [
  {
    name: "#기획",
    backgroundColor: "#E9FBFD",
    color: "#06ADC4",
  },
  {
    name: "#디자인",
    backgroundColor: "#FEF0F4",
    color: "#E44269",
  },
  {
    name: "#개발",
    backgroundColor: "#E5FDF6",
    color: "#14A87B",
  },
  {
    name: "#FE",
    backgroundColor: "",
    color: "#",
  },
  {
    name: "#BE",
    backgroundColor: "",
    color: "#",
  },
  {
    name: "#iOS",
    backgroundColor: "",
    color: "#",
  },
  {
    name: "#AOS",
    backgroundColor: "",
    color: "",
  },
];

export default function getTagColor(tagName) {
  switch (tagName) {
    case "#개발":
      return "#E9FBFD";
    case "#기획":
      return "#E9FBFD";
    case "#FE":
      return "#E9FBFD";
    case "#BE":
      return "#E9FBFD";
    default:
      return "#E9FBFD";
  }
}
