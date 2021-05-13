import { Link } from "gatsby";
import React from "react";
import ProjectPreview from "./project-preview";

import * as styles from "./project-preview-grid.module.css";
import Img from "gatsby-image";

function ProjectPreviewGrid(props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {console.log(props.img)}
        {props.img === undefined ? (
          ""
        ) : (
          <>
            {" "}
            <Img fixed={props.img[0].localFile.childImageSharp.fixed} />
            <Img fixed={props.img[1].localFile.childImageSharp.fixed} />
            <Img fixed={props.img[2].localFile.childImageSharp.fixed} />
            <Img fixed={props.img[3].localFile.childImageSharp.fixed} />
            <Img fixed={props.img[4].localFile.childImageSharp.fixed} />
            <Img fixed={props.img[5].localFile.childImageSharp.fixed} />
          </>
        )}

        {/* {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))} */}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

ProjectPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default ProjectPreviewGrid;
