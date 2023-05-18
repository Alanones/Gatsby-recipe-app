// import * as React from "react";
// import { useStaticQuery, graphql } from "gatsby";

// const ComponentName = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           author
//           description
//           simpleData
//           title
//           completeData {
//             name
//             age
//           }
//           person {
//             name
//             age
//           }
//         }
//       }
//     }
//   `);
//   return (
//     <div>
//       <h2>{data.site.siteMetadata.person.name}</h2>
//       <div>
//         {data.site.siteMetadata.completeData.map((a, i) => {
//           return (
//             <p key={i}>
//               {a.name}:{a.age}
//             </p>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ComponentName;
