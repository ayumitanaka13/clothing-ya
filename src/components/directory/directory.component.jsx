import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import './directory.styles.scss';
import { DirectoryMenuContainer } from "./directory.styles";

import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

class Directory extends React.Component {
  render() {
    return (
      <DirectoryMenuContainer>
        {this.props.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            className={title}
          />
        ))}
      </DirectoryMenuContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
