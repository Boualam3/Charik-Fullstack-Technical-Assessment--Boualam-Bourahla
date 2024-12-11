import { useState } from "react";

interface Option {
  value: string;
  label: string;
  default: boolean;
}

interface Options {
  statusOptions: Option[];
  sortOptions: Option[];
  searchOptions: Option[];
  useSearch: boolean;
  useFilter: boolean;
  enable: boolean;
  statusOptionsList?: statusOptionsListType[];

  listBySelectOptions?: any[];
}

type statusOptionsListType = {
  value: string;
  label: string;
  options: {
    value: string | boolean | null;
    label: string;
    default: boolean;
  }[];
};

export interface FilterAndSortOptions {
  status: string | undefined;
  setStatus: (status: string | undefined) => void;
  statusOptions: Option[];

  listStatus?: TransformedData | null | undefined;
  seListStatus?: any;
  statusOptionsList?: statusOptionsListType[];

  sort: string | undefined;
  setSort: (sort: string | undefined) => void;
  sortOptions: Option[];

  search: string;
  setSearch: (status: string) => void;
  searchOptions: Option[];

  searchFiled: string | undefined;
  setSearchFiled: (sort: string | undefined) => void;
  useSearch: boolean;
  useFilter: boolean;
  enable: boolean;

  listBySelect?: any;
  seListBySelect?: any;
  listBySelectOptions?: any;
}

type TransformedData = {
  [key: string]: any;
};

function transformListStatusData(data: any) {
  if (!data?.length) {
    return null;
  }
  let result: TransformedData = {};
  data?.forEach((filter: any) => {
    const selectedOption = filter.options.find((option: any) => option.default);

    if (selectedOption) {
      result[filter.value] = selectedOption.value;
    }
  });

  return result;
}

function transformListBySelectData(data: any) {
  if (!data?.length) {
    return null;
  }
  let result: TransformedData = {};
  data?.forEach((filter: any) => {
    result[filter.name] = filter.value;
  });

  return result;
}

const useFilterAndSort = (fetchOptions: Options): FilterAndSortOptions => {
  const [status, setStatus] = useState<string | undefined>(
    fetchOptions.statusOptions.find((item) => item.default)?.value
  );

  const [listStatus, seListStatus] = useState<TransformedData | null>(
    transformListStatusData(fetchOptions?.statusOptionsList)
  );

  const [listBySelect, seListBySelect] = useState<any>(
    fetchOptions?.listBySelectOptions
      ? transformListBySelectData(fetchOptions?.listBySelectOptions)
      : []
  );

  const [sort, setSort] = useState<string | undefined>(
    fetchOptions.sortOptions.find((item) => item.default)?.value
  );

  const [search, setSearch] = useState<string>("");

  const [searchFiled, setSearchFiled] = useState<string | undefined>(
    fetchOptions.searchOptions.find((item) => item.default)?.value
  );

  // listBySelect
  // const [searchOptions, setSearchOptions] = useState<string

  return {
    status,
    setStatus,
    statusOptions: fetchOptions.statusOptions,

    listStatus: listStatus,
    seListStatus: seListStatus,
    statusOptionsList: fetchOptions?.statusOptionsList,

    sort,
    setSort,
    sortOptions: fetchOptions.sortOptions,
    search,
    setSearch,
    searchOptions: fetchOptions.searchOptions,
    searchFiled,
    setSearchFiled,
    useSearch: fetchOptions?.useSearch,
    useFilter: fetchOptions?.useFilter,
    enable: fetchOptions?.enable,

    listBySelect: listBySelect,
    seListBySelect: seListBySelect,
    listBySelectOptions: fetchOptions?.listBySelectOptions,
  };
};

export default useFilterAndSort;
