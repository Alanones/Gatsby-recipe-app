// import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import styled from "styled-components";

// const query = graphql`
//   {
//     allFile(filter: { extension: { ne: "svg" } }) {
//       nodes {
//         name
//         childImageSharp {
//           gatsbyImageData(
//             layout: FIXED
//             placeholder: BLURRED
//             transformOptions: { grayscale: false }
//             width: 200
//             height: 200
//           )
//         }
//       }
//     }
//   }
// `;
// const Gallery = () => {
//   const data = useStaticQuery(query);
//   const nodes = data.allFile.nodes;
//   return (
//     <Wrapper>
//       {nodes.map((image, index) => {
//         const imagePath = getImage(image);
//         return (
//           <article key={index} className="item">
//             {/* <GatsbyImage className="gallery" image={childImageSharp.gatsbyImageData} alt={image.name} /> */}
//             <GatsbyImage className="gallery" image={imagePath} alt={image.name} />
//             <p>{image.name}</p>
//           </article>
//         );
//       })}
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   .item {
//     margin-right: 1rem;
//   }
//   .gallery {
//     border-radius: 1rem;
//   }
// `;

// export default Gallery;
