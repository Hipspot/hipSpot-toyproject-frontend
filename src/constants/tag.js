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
    name: "#FE",
    backgroundColor: "#E5FDF6",
    color: "#14A87B",
  },
  {
    name: "#BE",
    backgroundColor: "#FDE8D4",
    color: "#F77904",
  },
  {
    name: "#Mobile",
    backgroundColor: "#EFE3F5",
    color: "#8C0AC9",
  },
];

export default function getTagColor(tagName) {
  switch (tagName) {
    case "#기획":
      return "#06ADC4";
    case "#디자인":
      return "#E44269";
    case "#FE":
      return "#14A87B";
    case "#BE":
      return "#F77904";
    case "Mobile":
      return "#8C0AC9";

    default:
      return "#E9FBFD";
  }
}
