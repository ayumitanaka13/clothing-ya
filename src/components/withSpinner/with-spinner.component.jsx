import React from "react";

import Spinner from "../spinner/spinner.component";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      // <SpinnerOverlay>
      //   <SpinnerContainer />
      // </SpinnerOverlay>
      <Spinner />
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
