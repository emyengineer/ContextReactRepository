import React from "react";
import Button from "./Button";
import { ThemeContextConsumer } from "./themeContext";

function Image(props) {
  // We don't need this anymore
  // const theme = this.context

  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className={`${context.theme}-image image`}>
          <div className={`${context.theme}-ball ball`} />
          <Button />
        </div>
      )}
    </ThemeContextConsumer>
  );
}

// We don't need this anymore
// Image.contextType = ThemeContext;

export default Image;
