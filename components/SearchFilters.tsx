import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { queryAction } from "../redux/slices/querySlice";
import { baseUrl } from "../utils/fetchApi";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
  const queryState = useAppSelector((state) => state.query);
  const dispatch = useAppDispatch();
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();

  const handleSelectChange = (filterValues: { name: string; value: any }) => {
    if (filterValues.name === "purpose") {
      dispatch(queryAction.setPurpose(filterValues.value));
    } else if (filterValues.name === "rentFrequency") {
      dispatch(queryAction.setRentFreq(filterValues.value));
    } else if (filterValues.name === "categoryExternalID") {
      dispatch(queryAction.setCatExId(filterValues.value));
    } else if (filterValues.name === "minPrice") {
      dispatch(queryAction.setMinP(filterValues.value));
    } else if (filterValues.name === "maxPrice") {
      dispatch(queryAction.setMaxP(filterValues.value));
    } else if (filterValues.name === "areaMax") {
      dispatch(queryAction.setMaxA(filterValues.value));
    } else if (filterValues.name === "roomsMin") {
      dispatch(queryAction.setRoom(filterValues.value));
    } else if (filterValues.name === "bathsMin") {
      dispatch(queryAction.setBath(filterValues.value));
    } else if (filterValues.name === "sort") {
      dispatch(queryAction.setSort(filterValues.value));
    } else if (filterValues.name === "furnishingStatus") {
      dispatch(queryAction.setFurnished(filterValues.value));
    }

    handleRoute(filterValues);
  };
  const handleRoute = (filterValues: { name: string; value: any }) => {
    const path = router.pathname;
    router.push({
      pathname: path,
      query: `purpose=${
        filterValues.name === "purpose"
          ? filterValues.value
          : queryState.purpose
      }&categoryExternalID=${
        filterValues.name === "categoryExternalID"
          ? filterValues.value
          : queryState.categoryExternalID
      }&bathsMin=${
        filterValues.name === "bathsMin"
          ? filterValues.value
          : queryState.bathsMin
      }&rentFrequency=${
        filterValues.name === "rentFrequency"
          ? filterValues.value
          : queryState.rentFrequency
      }&priceMin=${
        filterValues.name === "priceMin"
          ? filterValues.value
          : queryState.minPrice
      }&priceMax=${
        filterValues.name === "priceMax"
          ? filterValues.value
          : queryState.maxPrice
      }&roomsMin=${
        filterValues.name === "roomsMin"
          ? filterValues.value
          : queryState.roomsMin
      }&sort=${
        filterValues.name === "sort" ? filterValues.value : queryState.sort
      }&areaMax=${
        filterValues.name === "areaMax"
          ? filterValues.value
          : queryState.areaMax
      }&furnishingStatus=${
        filterValues.name === "furnishingStatus"
          ? filterValues.value
          : queryState.furnishingStatus
      }`,
    });
  };
  return (
    <Stack
      sx={{ bgcolor: "#f5f5f5", p: 4, justifyContent: "center" }}
      direction="row"
      flexWrap="wrap"
      gap={2}
    >
      {filters.map((filter) => (
        <FormControl sx={{ width: 200 }}>
          <InputLabel id="demo-simple-select-label">
            {filter.placeholder}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label={filter.placeholder}
            onChange={(e) =>
              handleSelectChange({
                name: filter.queryName,
                value: e.target.value,
              })
            }
          >
            {filter?.items?.map((item) => (
              <MenuItem value={item.value} key={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </Stack>
  );
};

export default SearchFilters;
