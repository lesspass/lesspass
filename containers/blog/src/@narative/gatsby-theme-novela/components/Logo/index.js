import React from "react";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful
 * when you want to change your logo depending on the theme you are on.
 */
export default function Logo({ fill }) {
  return (
    <svg width="50" height="50" version="1.1">
      <defs>
        <filter colorInterpolationFilters="sRGB">
          <feFlood
            floodColor="#000"
            floodOpacity="0.4"
            result="flood"
          ></feFlood>
          <feComposite
            in="flood"
            in2="SourceGraphic"
            operator="in"
            result="composite1"
          ></feComposite>
          <feGaussianBlur result="blur" stdDeviation="2"></feGaussianBlur>
          <feOffset dx="4" dy="4" result="offset"></feOffset>
          <feComposite
            in="SourceGraphic"
            in2="offset"
            operator="over"
            result="composite2"
          ></feComposite>
        </filter>
        <filter id="a" colorInterpolationFilters="sRGB">
          <feFlood
            floodColor="#000"
            floodOpacity="0.4"
            result="flood"
          ></feFlood>
          <feComposite
            in="flood"
            in2="SourceGraphic"
            operator="in"
            result="composite1"
          ></feComposite>
          <feGaussianBlur result="blur" stdDeviation="1"></feGaussianBlur>
          <feOffset dx="4" dy="4" result="offset"></feOffset>
          <feComposite
            in="SourceGraphic"
            in2="offset"
            operator="over"
            result="composite2"
          ></feComposite>
        </filter>
        <filter colorInterpolationFilters="sRGB">
          <feFlood
            floodColor="#000"
            floodOpacity="0.4"
            result="flood"
          ></feFlood>
          <feComposite
            in="flood"
            in2="SourceGraphic"
            operator="in"
            result="composite1"
          ></feComposite>
          <feGaussianBlur result="blur" stdDeviation="2"></feGaussianBlur>
          <feOffset dx="4" dy="4" result="offset"></feOffset>
          <feComposite
            in="SourceGraphic"
            in2="offset"
            operator="over"
            result="composite2"
          ></feComposite>
        </filter>
      </defs>
      <g fillOpacity="1" stroke="none" transform="translate(-5.421 -5)">
        <rect
          width="40.035"
          height="40.035"
          x="-19.72"
          y="22.706"
          fill="#0275d8"
          opacity="0.9"
          rx="8.007"
          transform="rotate(-45)"
        ></rect>
        <path
          style={{
            lineHeight: "normal",
            InkscapeFontSpecification: "Sans",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextTransform: "none",
            textTransform: "none",
            marker: "none",
          }}
          fill="#fff"
          fillRule="nonzero"
          strokeWidth="10"
          d="M79.92 55.04c-12.363 0-22.471 10.136-22.471 22.5 0 10.28 6.991 18.98 16.453 21.628v45.872h18.253c.126 0 .225-.099.225-.225v-10.237c0-.126-.104-.26-.225-.225H85.94V130.5h6.215c.126 0 .225-.1.225-.225v-10.238a.223.223 0 00-.225-.225H85.94V99.168c9.462-2.648 16.453-11.348 16.453-21.628 0-12.364-10.108-22.5-22.472-22.5zm0 8.831c7.597 0 13.641 6.073 13.641 13.67 0 7.596-6.044 13.64-13.64 13.64-7.596 0-13.64-6.044-13.64-13.64 0-7.597 6.044-13.67 13.64-13.67z"
          baselineShift="baseline"
          color="#000"
          direction="ltr"
          display="inline"
          enableBackground="accumulate"
          filter="url(#a)"
          fontFamily="Sans"
          fontSize="medium"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          letterSpacing="normal"
          overflow="visible"
          textAnchor="start"
          textDecoration="none"
          transform="matrix(.33333 0 0 .33333 3.78 -3.347)"
          visibility="visible"
          wordSpacing="normal"
          writingMode="lr-tb"
        ></path>
      </g>
    </svg>
  );
}
