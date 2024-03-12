'use client'
import React from "react";
import { Select } from "chakra-react-select";
import PropTypes from "prop-types";

const shapes = {
  round: {
    borderRadius: "17px",
  },
};
const variants = {
  outline: {
    gray_500_01: {
      borderColor: "gray.500_01",
      borderWidth: "1px",
      borderStyle: "solid",
      color: "black.900",
    },
  },
};
const sizes = {
  xs: {
    h: "35px",
    pl: "15px",
    pr: "35px",
    fontSize: "14px",
  },
};

const SelectBox = React.forwardRef(
  (
    {
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      style,
      shape = "",
      size = "xs",
      variant = "outline",
      color = "gray_500_01",
      ...restProps
    },
    ref,
  ) => {
    return (
      <>
        <Select
          ref={ref}
          options={options}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          chakraStyles={{
            container: (provided) => ({
              ...provided,
              ...sizes[size],
              ...shapes[shape],
              ...variants[variant][color],
              ...style,
              zIndex: 0,
              display: "flex",
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
              color: "inherit !important",
              "&:hover": {
                border: "0 !important",
              },
              "&>div": {
                padding: "0 !important",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              color: "#000",
            }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
      </>
    );
  },
);

SelectBox.propTypes = {
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["gray_500_01"]),
};

export { SelectBox };
