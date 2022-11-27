export const hipTag = [
  {
    name: "global",
    localeName: "공통",
  },
  {
    name: "pm",
    localeName: "기획",
  },
  {
    name: "design",
    localeName: "디자인",
  },
  {
    name: "fe",
    localeName: "FE",
  },
  {
    name: "be",
    localeName: "BE",
  },
  {
    name: "mobile",
    localeName: "모바일",
  },
];

export const getTagColor = (tagName) => {
  switch (tagName) {
    case "global":
      return "#06ADC4";
    case "pm":
      return "#06ADC4";
    case "design":
      return "#E44269";
    case "fe":
      return "#14A87B";
    case "be":
      return "#F77904";
    case "mobile":
      return "#8C0AC9";
    default:
      return "#E9FBFD";
  }
};

export const getTagBackgroundColor = (tagName) => {
  switch (tagName) {
    case "global":
      return "#E9FBFD";
    case "pm":
      return "#E9FBFD";
    case "design":
      return "#FEF0F4";
    case "fe":
      return "#E5FDF6";
    case "be":
      return "#FDE8D4";
    case "mobile":
      return "#EFE3F5";
    default:
      return "#E9FBFD";
  }
};

export const tagToLocaleString = (tag) => {
  switch (tag) {
    case "pm":
      return "기획";
    case "fe":
      return "FE";
    case "be":
      return "BE";
    case "global":
      return "공통";
    case "mobile":
      return "모바일";
    case "design":
      return "디자인";
  }
};
