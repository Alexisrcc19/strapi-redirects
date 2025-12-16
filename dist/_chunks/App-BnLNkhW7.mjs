import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Page } from "@strapi/strapi/admin";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import { useIntl } from "react-intl";
import { g as getTranslation, u as useFetchClient, P as PLUGIN_ID, L as Layouts, R as RedirectModal, l as lib } from "./index-DlLBvc9Y.mjs";
import * as React from "react";
import { useState, useMemo, useEffect } from "react";
import { useDebounce } from "use-debounce";
import "react-dom/client";
import { Modal, Flex, Box, Typography, Table, Thead, Tr, Th, Tbody, Td, Button, Pagination as Pagination$1, PreviousLink, PageLink, Dots, NextLink, Main, SearchForm, Searchbar, Loader, Checkbox, Field, SingleSelect, SingleSelectOption, EmptyStateLayout } from "@strapi/design-system";
import { File, ChevronUp, ChevronDown, Upload, Plus, Trash, Pencil } from "@strapi/icons";
import "@strapi/icons/symbols";
import styled from "styled-components";
import csvtojson from "csvtojson";
const NotificationsContext = /* @__PURE__ */ React.createContext({
  toggleNotification: () => {
  }
});
/**
* @preserve
* @description Returns an object to interact with the notification
* system. The callbacks are wrapped in `useCallback` for a stable
* identity.
*
* @example
* ```tsx
* import { useNotification } from '@strapi/strapi/admin';
*
* const MyComponent = () => {
*  const { toggleNotification } = useNotification();
*
*  return <button onClick={() => toggleNotification({ message: 'Hello world!' })}>Click me</button>;
*/
const useNotification = () => React.useContext(NotificationsContext);
const redirectTableHeaders = (formatMessage) => [
  {
    name: "source",
    label: formatMessage({
      id: getTranslation("overview.table.headers.source"),
      defaultMessage: "Source"
    }),
    key: "source",
    isSortable: true
  },
  {
    name: "destination",
    label: formatMessage({
      id: getTranslation("overview.table.headers.destination"),
      defaultMessage: "Destination"
    }),
    key: "destination",
    isSortable: true
  },
  {
    name: "permanent",
    label: formatMessage({
      id: getTranslation("overview.table.headers.permanent"),
      defaultMessage: "Permanent"
    }),
    key: "permanent",
    isSortable: true
  },
  {
    name: "actions",
    label: formatMessage({
      id: getTranslation("overview.table.headers.actions"),
      defaultMessage: "Actions"
    }),
    key: "actions",
    isSortable: false
  }
];
const redirectQuery = ({
  sortBy,
  sortOrder,
  pageSize,
  page,
  searchQuery
}) => {
  const baseQuery = {
    sort: [`${sortBy}:${sortOrder}`],
    pagination: {
      pageSize,
      page
    }
  };
  if (searchQuery.trim() !== "") {
    baseQuery.filters = {
      $or: [
        {
          source: { $containsi: searchQuery }
        },
        {
          destination: { $containsi: searchQuery }
        }
      ]
    };
  }
  return baseQuery;
};
const DEFAULT_PAGE_SIZE = 10;
const useSearchQuery = () => {
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(() => {
    const searchParams = new URLSearchParams(search);
    return searchParams.get("pageSize") ? Number(searchParams.get("pageSize")) : DEFAULT_PAGE_SIZE;
  });
  const setNewPage = (newPage) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", newPage.toString());
    navigate({
      pathname,
      search: "?" + searchParams.toString()
    });
  };
  const setNewPageSize = (newPageSize) => {
    setPageSize(newPageSize);
    const searchParams = new URLSearchParams(search);
    searchParams.set("pageSize", newPageSize.toString());
    searchParams.set("page", "1");
    navigate({
      pathname,
      search: "?" + searchParams.toString()
    });
  };
  return useMemo(() => {
    const searchParams = new URLSearchParams(search);
    return {
      pageSize,
      // Using local state value here
      page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
      setNewPage,
      setNewPageSize
    };
  }, [search, pathname, pageSize, navigate]);
};
const NoContentIcon = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16rem",
    height: "16",
    fill: "none",
    viewBox: "0 0 217 121",
    children: [
      /* @__PURE__ */ jsxs("g", { clipPath: "url(#EmptyDocuments_svg__a)", opacity: "0.84", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#D9D8FF",
            fillOpacity: "0.8",
            fillRule: "evenodd",
            d: "M189.917 20.442a7.583 7.583 0 0 1 0 15.167h-43.334a7.584 7.584 0 1 1 0 15.167h23.834a7.583 7.583 0 0 1 0 15.166h-11.022c-5.281 0-9.562 3.396-9.562 7.584q0 2.934 3.19 5.479c2.017 1.608 4.824 1.818 7.065 3.097a7.584 7.584 0 0 1-3.755 14.174H66.417a7.583 7.583 0 1 1 0-15.167h-42.25a7.583 7.583 0 0 1 0-15.167H67.5a7.583 7.583 0 0 0 0-15.166H40.417a7.583 7.583 0 0 1 0-15.167H83.75a7.583 7.583 0 0 1 0-15.167zm0 30.334a7.583 7.583 0 0 1 0 15.166 7.584 7.584 0 0 1 0-15.166",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff",
            fillRule: "evenodd",
            d: "m133.228 20.443 10.077 73.496.905 7.373a4.33 4.33 0 0 1-3.773 4.829l-63.44 7.79a4.334 4.334 0 0 1-4.83-3.773l-9.766-79.547a2.167 2.167 0 0 1 1.886-2.414l.023-.003 5.263-.59zm-59.4 6.683 4.97-.557z",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            stroke: "#7B79FF",
            strokeWidth: "2.5",
            d: "m73.829 27.126 4.97-.557m54.429-6.126 10.077 73.496.905 7.373a4.33 4.33 0 0 1-3.773 4.829l-63.44 7.79a4.334 4.334 0 0 1-4.83-3.773l-9.766-79.547a2.167 2.167 0 0 1 1.886-2.414l.023-.003 5.263-.59z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#F0F0FF",
            fillRule: "evenodd",
            d: "m130.485 25.068 9.121 66.607.821 6.683c.264 2.152-1.246 4.109-3.373 4.37l-56.812 6.976c-2.128.261-4.066-1.272-4.33-3.425l-8.83-71.908a2.166 2.166 0 0 1 1.887-2.414l7.028-.863",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff",
            fillRule: "evenodd",
            stroke: "#7B79FF",
            strokeWidth: "2.5",
            d: "M135.998 6.63H86.645a2.97 2.97 0 0 0-2.107.872 2.97 2.97 0 0 0-.873 2.107v82.333c0 .823.334 1.568.873 2.107a2.97 2.97 0 0 0 2.106.872h63.917a2.97 2.97 0 0 0 2.107-.872 2.97 2.97 0 0 0 .872-2.107V24.164a2.98 2.98 0 0 0-.873-2.108L138.104 7.502a2.98 2.98 0 0 0-2.106-.872Z",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            stroke: "#7B79FF",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2.5",
            d: "M136.478 7.879v12.563a3.25 3.25 0 0 0 3.25 3.25h8.595M95.311 78.942h28.167m-28.167-55.25h28.167zm0 13h46.583zm0 14.084h46.583zm0 14.083h46.583z"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "EmptyDocuments_svg__a", children: /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M.667.797h216v120h-216z" }) }) })
    ]
  }
);
const importTableHeaders = (formatMessage) => [
  {
    name: "source",
    label: formatMessage({
      id: getTranslation("overview.table.headers.source"),
      defaultMessage: "Source"
    }),
    key: "source",
    isSortable: true
  },
  {
    name: "destination",
    label: formatMessage({
      id: getTranslation("overview.table.headers.destination"),
      defaultMessage: "Destination"
    }),
    key: "destination",
    isSortable: true
  },
  {
    name: "permanent",
    label: formatMessage({
      id: getTranslation("overview.table.headers.permanent"),
      defaultMessage: "Permanent"
    }),
    key: "permanent",
    isSortable: true
  },
  {
    name: "status",
    label: formatMessage({
      id: getTranslation("overview.table.headers.status"),
      defaultMessage: "Status"
    }),
    key: "status",
    isSortable: true
  }
];
const isImmediateLoop = (source, destination) => source === destination;
const findDuplicate = (redirects, source) => redirects.find((r) => r.source === source);
const isIndirectLoop = (redirects, source, destination, origin = source, checked = /* @__PURE__ */ new Set()) => {
  if (checked.has(destination)) return false;
  checked.add(destination);
  for (const redirect of redirects) {
    if (redirect.source === destination) {
      if (redirect.destination === origin) return true;
      if (isIndirectLoop(redirects, redirect.source, redirect.destination, origin, checked))
        return true;
    }
  }
  return false;
};
const parseAndValidateCSV = async (data) => {
  try {
    const dataRaw = await csvtojson().fromString(data);
    const redirects = dataRaw.map(
      (item) => ({
        source: item.source,
        destination: item.destination,
        permanent: item.permanent.toLowerCase() === "true"
      })
    );
    const validationResults = redirects.map((redirect, index, self) => {
      if (isImmediateLoop(redirect.source, redirect.destination)) {
        return {
          ...redirect,
          status: "INVALID",
          reason: "Immediate loop detected",
          details: { type: "LOOP_DETECTED" }
        };
      }
      if (findDuplicate(self.slice(0, index), redirect.source)) {
        return {
          ...redirect,
          status: "INVALID",
          reason: "Duplicate redirect",
          details: { type: "DUPLICATE" }
        };
      }
      if (isIndirectLoop(
        self.filter((_, idx) => idx !== index),
        redirect.source,
        redirect.destination
      )) {
        return {
          ...redirect,
          status: "INVALID",
          reason: "Indirect loop detected",
          details: { type: "LOOP_DETECTED" }
        };
      }
      return {
        ...redirect,
        status: "VALID",
        details: { type: "NEW" }
      };
    });
    return validationResults;
  } catch (error) {
    console.error("Failed to parse CSV:", error);
    throw new Error("Error parsing and validating CSV data");
  }
};
const StyledLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 48px;
  border-width: 3px;
  border-color: ${({ isDragOver }) => isDragOver ? "hsl(210, 100%, 50%)" : "#ddd"};
  border-style: dashed;
  border-radius: 12px;
  cursor: pointer;

  &::after {
    content: '';
    display: ${({ isDragOver }) => isDragOver ? "block" : "none"};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
  }
`;
const HiddenInput = styled.input`
  display: none;
`;
const ImportModal = ({ visible, handleCloseImportModal }) => {
  const { formatMessage } = useIntl();
  const { post } = useFetchClient();
  const [redirects, setRedirects] = useState([]);
  const [sortBy, setSortBy] = useState("source");
  const [sortOrder, setSortOrder] = useState("desc");
  const [isDragOver, setIsDragOver] = useState(false);
  const headers = importTableHeaders(formatMessage);
  const handleSort = (field) => {
    let sortedRedirects = [...redirects];
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
    sortedRedirects.sort((a, b) => {
      const valA = a[field];
      const valB = b[field];
      if (typeof valA === "string" && typeof valB === "string") {
        return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
      } else if (typeof valA === "boolean" && typeof valB === "boolean") {
        return sortOrder === "asc" ? Number(valA) - Number(valB) : Number(valB) - Number(valA);
      }
      return 0;
    });
    setRedirects(sortedRedirects);
  };
  const handleFileChange = async (e) => {
    try {
      const file = e.target instanceof HTMLInputElement && e.target.files ? e.target.files[0] : e instanceof DragEvent && e.dataTransfer ? e.dataTransfer.files[0] : null;
      if (!file) {
        throw new Error("No file selected or dropped.");
      }
      const readFileAsync = (file2) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => resolve(event.target?.result);
          reader.onerror = reject;
          reader.readAsText(file2);
        });
      };
      const content = await readFileAsync(file);
      const data = await parseAndValidateCSV(content);
      const validRedirects = data.map((result) => ({
        source: result.source,
        destination: result.destination,
        permanent: result.permanent,
        status: result.status
      }));
      setRedirects(validRedirects);
    } catch (error) {
      console.error("Error handling file change:", error);
    }
  };
  const handleImport = async () => {
    try {
      const dataToImport = redirects.map(({ status, ...rest }) => rest);
      const response = await post(`/${PLUGIN_ID}/import`, dataToImport);
      handleCloseImportModal();
    } catch (error) {
      console.error("Error importing redirects:", error);
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };
  const handleDragLeave = () => {
    setIsDragOver(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileChange(e);
  };
  return /* @__PURE__ */ jsx(Modal.Root, { onOpenChange: handleCloseImportModal, open: visible, labelledBy: "title", children: /* @__PURE__ */ jsxs(Modal.Content, { children: [
    /* @__PURE__ */ jsx(Modal.Header, { children: /* @__PURE__ */ jsx(Modal.Title, { id: "title", children: formatMessage({
      id: getTranslation("modal.import.title"),
      defaultMessage: "Import Redirects"
    }) }) }),
    /* @__PURE__ */ jsxs(Modal.Body, { children: [
      redirects.length === 0 && /* @__PURE__ */ jsx(Flex, { children: /* @__PURE__ */ jsxs(
        StyledLabel,
        {
          isDragOver,
          onDragEnter: handleDragOver,
          onDragOver: handleDragOver,
          onDragLeave: handleDragLeave,
          onDrop: handleDrop,
          children: [
            /* @__PURE__ */ jsx(Box, { padding: 4, children: /* @__PURE__ */ jsx(
              File,
              {
                width: "24px",
                height: "24px",
                color: isDragOver ? "hsl(210, 100%, 50%)" : "neutral600"
              }
            ) }),
            /* @__PURE__ */ jsx(
              Typography,
              {
                variant: "beta",
                textColor: isDragOver ? "hsl(210, 100%, 50%)" : "neutral600",
                as: "p",
                children: formatMessage({
                  id: getTranslation("modal.import.dragAndDrop"),
                  defaultMessage: "Drag and drop your CSV file here, or click to upload"
                })
              }
            ),
            /* @__PURE__ */ jsx(HiddenInput, { type: "file", accept: ".csv", onChange: handleFileChange })
          ]
        }
      ) }),
      redirects.length > 0 && /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(Thead, { children: /* @__PURE__ */ jsx(Tr, { children: headers.map((header, index) => /* @__PURE__ */ jsx(
          Th,
          {
            onClick: header.isSortable ? () => handleSort(header.key) : void 0,
            style: { cursor: header.isSortable ? "pointer" : "default" },
            children: /* @__PURE__ */ jsxs(
              Flex,
              {
                alignItems: "center",
                justifyContent: index === headers.length - 1 ? "flex-end" : "",
                style: { width: index === headers.length - 1 ? "100%" : "auto" },
                children: [
                  /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: header.label }),
                  header.isSortable && /* @__PURE__ */ jsx(Box, { paddingLeft: 1, children: sortBy === header.key ? sortOrder === "asc" ? /* @__PURE__ */ jsx(ChevronUp, { "aria-label": "Sorted ascending" }) : /* @__PURE__ */ jsx(ChevronDown, { "aria-label": "Sorted descending" }) : null })
                ]
              }
            )
          },
          header.key
        )) }) }),
        /* @__PURE__ */ jsx(Tbody, { children: redirects.map((redirect, idx) => /* @__PURE__ */ jsxs(Tr, { children: [
          /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { children: redirect.source }) }),
          /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { children: redirect.destination }) }),
          /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { children: redirect.permanent ? "Yes" : "No" }) }),
          /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Flex, { width: "100%", justifyContent: "flex-end", children: /* @__PURE__ */ jsx(Typography, { children: redirect.status }) }) })
        ] }, idx)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Modal.Footer, { children: [
      /* @__PURE__ */ jsx(Modal.Close, { children: /* @__PURE__ */ jsx(Button, { variant: "tertiary", onClick: handleCloseImportModal, children: formatMessage({
        id: getTranslation("modal.cancel"),
        defaultMessage: "Cancel"
      }) }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          startIcon: /* @__PURE__ */ jsx(Upload, {}),
          disabled: redirects.length === 0,
          onClick: handleImport,
          children: formatMessage({
            id: "modal.import.confirm",
            defaultMessage: "Import Redirects"
          })
        }
      )
    ] })
  ] }) });
};
const Pagination = ({ activePage, pageCount, handlePageChange }) => {
  const { formatMessage } = useIntl();
  const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
  const startPages = range(1, Math.min(2, pageCount));
  const endPages = range(Math.max(pageCount - 1, 2), pageCount);
  const siblingsStart = Math.max(Math.min(activePage - 1, pageCount - 2), 3);
  const siblingsEnd = Math.min(Math.max(activePage + 1, 3), pageCount - 2);
  const items = [
    ...startPages,
    ...siblingsStart > 3 ? ["start-ellipsis"] : [],
    ...range(siblingsStart, siblingsEnd),
    ...siblingsEnd < pageCount - 2 ? ["end-ellipsis"] : [],
    ...endPages
  ];
  return /* @__PURE__ */ jsxs(Pagination$1, { activePage, pageCount, children: [
    /* @__PURE__ */ jsx(
      PreviousLink,
      {
        onClick: () => handlePageChange(activePage > 1 ? activePage - 1 : 1),
        disabled: activePage === 1,
        children: formatMessage({
          id: "components.pagination.go-to-previous",
          defaultMessage: "Go to previous page"
        })
      }
    ),
    items.map((item, index) => {
      if (typeof item === "number") {
        return /* @__PURE__ */ jsx(PageLink, { onClick: () => handlePageChange(item), number: item, children: formatMessage(
          {
            id: "components.pagination.go-to",
            defaultMessage: "Go to page {page}"
          },
          { page: item }
        ) }, index);
      }
      return /* @__PURE__ */ jsx(Dots, {}, index);
    }),
    /* @__PURE__ */ jsx(
      NextLink,
      {
        onClick: () => handlePageChange(activePage < pageCount ? activePage + 1 : pageCount),
        disabled: activePage === pageCount,
        children: formatMessage({
          id: "components.pagination.go-to-next",
          defaultMessage: "Go to next page"
        })
      }
    )
  ] });
};
const HomePage = () => {
  const { formatMessage } = useIntl();
  const { toggleNotification } = useNotification();
  const { get, del } = useFetchClient();
  const pageSizes = [5, 10, 20, 50];
  const headers = redirectTableHeaders(formatMessage);
  const { pageSize, page, setNewPage, setNewPageSize } = useSearchQuery();
  const [isFetching, setIsFetching] = useState(false);
  const [redirects, setRedirects] = useState([]);
  const [selectedRedirect, setSelectedRedirect] = useState(null);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    pageCount: 1,
    total: 0
  });
  const [isRedirectModalOpen, setIsRedirectModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [selectedRedirects, setSelectedRedirects] = useState([]);
  const handleRedirectModal = () => {
    setIsRedirectModalOpen(true);
  };
  const handleCloseRedirectModal = () => {
    setIsRedirectModalOpen(false);
    setSelectedRedirect(null);
    getRedirects();
  };
  const handleImportModal = () => {
    setIsImportModalOpen(true);
  };
  const handleCloseImportModal = () => {
    setIsImportModalOpen(false);
    getRedirects();
  };
  const handleEdit = (redirect) => {
    setSelectedRedirect(redirect);
    setIsRedirectModalOpen(true);
  };
  const handleSort = (field) => {
    if (sortBy === field && sortBy !== "createdAt") {
      if (sortOrder === "desc") setSortOrder("asc");
      else {
        setSortOrder("desc");
        setSortBy("createdAt");
      }
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
    setNewPage(1);
  };
  const handlePageChange = (newPage) => {
    setNewPage(newPage);
  };
  const handlePageSizeChange = (newPageSize) => {
    setNewPageSize(Number(newPageSize));
    setNewPage(1);
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleDelete = async (documentId) => {
    try {
      await del(`${PLUGIN_ID}/${documentId}`);
      getRedirects();
    } catch (error) {
      console.error("Error deleting redirect", error);
      toggleNotification({
        type: "warning",
        message: `Error deleting redirect ${error}`
      });
    }
  };
  const handleBulkDelete = async () => {
    try {
      await Promise.all(selectedRedirects.map((documentId) => del(`${PLUGIN_ID}/${documentId}`)));
      setSelectedRedirects([]);
      getRedirects();
    } catch (error) {
      console.error("Error deleting selected redirects", error);
      toggleNotification({
        type: "warning",
        message: `Error deleting selected redirects ${error}`
      });
    }
  };
  const getRedirects = async () => {
    try {
      setIsFetching(true);
      const queryObject = redirectQuery({
        sortBy,
        sortOrder,
        pageSize: Number(pageSize),
        page: Number(page),
        searchQuery
      });
      const queryString = lib.stringify(queryObject, { encodeValuesOnly: true });
      const { data } = await get(`/${PLUGIN_ID}?${queryString}`);
      setRedirects(data.redirects);
      setPagination(data.meta.pagination);
    } catch (error) {
      console.error("Error fetching redirects:", error);
      setRedirects([]);
      setPagination({
        page: 1,
        pageSize: 10,
        pageCount: 1,
        total: 0
      });
    } finally {
      setIsFetching(false);
    }
  };
  useEffect(() => {
    getRedirects();
  }, [sortBy, sortOrder, pageSize, page, searchQuery]);
  useEffect(() => {
    setSearchQuery(debouncedSearchTerm);
    setNewPage(1);
  }, [debouncedSearchTerm]);
  return /* @__PURE__ */ jsxs(Main, { style: { maxWidth: "calc(100vw - 75px)" }, children: [
    /* @__PURE__ */ jsx(
      Layouts.Header,
      {
        primaryAction: /* @__PURE__ */ jsxs(Flex, { gap: 4, children: [
          /* @__PURE__ */ jsx(Button, { variant: "secondary", startIcon: /* @__PURE__ */ jsx(Upload, {}), onClick: handleImportModal, children: formatMessage({
            id: getTranslation("pages.homePage.header.button.import"),
            defaultMessage: "Import Redirects"
          }) }),
          /* @__PURE__ */ jsx(Button, { variant: "primary", startIcon: /* @__PURE__ */ jsx(Plus, {}), onClick: handleRedirectModal, children: formatMessage({
            id: getTranslation("pages.homePage.header.button.redirect"),
            defaultMessage: "Add a Redirect"
          }) })
        ] }),
        title: formatMessage({
          id: getTranslation("plugin.name"),
          defaultMessage: "Redirects"
        }),
        subtitle: formatMessage(
          {
            id: getTranslation("pages.homePage.header.subtitle"),
            defaultMessage: "{number, plural, =0 {# entries} one {# entry} other {# entries}} found"
          },
          { number: pagination?.total }
        )
      }
    ),
    /* @__PURE__ */ jsx(Layouts.Content, { children: /* @__PURE__ */ jsxs(Flex, { gap: 4, direction: "column", alignItems: "stretch", marginBottom: 8, children: [
      /* @__PURE__ */ jsx(Box, { paddingBottom: 4, children: /* @__PURE__ */ jsxs(Flex, { gap: 4, alignItems: "center", children: [
        /* @__PURE__ */ jsx(SearchForm, { children: /* @__PURE__ */ jsx(
          Searchbar,
          {
            name: "searchbar",
            onClear: () => setSearchTerm(""),
            value: searchTerm,
            onChange: handleSearchChange,
            clearLabel: formatMessage({
              id: "pages.homePage.search.clearLabel",
              defaultMessage: "Clear redirects"
            }),
            placeholder: formatMessage({
              id: "pages.homePage.search.placeholder",
              defaultMessage: "Search redirects..."
            }),
            children: formatMessage({
              id: "pages.homePage.search.ariaLabel",
              defaultMessage: "Searching redirects"
            })
          }
        ) }),
        selectedRedirects.length > 0 && /* @__PURE__ */ jsx(Button, { variant: "danger", onClick: handleBulkDelete, endIcon: /* @__PURE__ */ jsx(Trash, {}), children: formatMessage({
          id: "pages.homePage.bulkDelete",
          defaultMessage: "Delete Selected"
        }) })
      ] }) }),
      isFetching ? /* @__PURE__ */ jsxs(Flex, { padding: 4, direction: "column", justifyContent: "center", alignItems: "center", children: [
        /* @__PURE__ */ jsx(Loader, {}),
        /* @__PURE__ */ jsx(Typography, { marginLeft: 2, children: formatMessage({ id: "loading", defaultMessage: "Loading..." }) })
      ] }) : redirects.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsx(Thead, { children: /* @__PURE__ */ jsxs(Tr, { children: [
            /* @__PURE__ */ jsx(Th, { children: /* @__PURE__ */ jsx(
              Checkbox,
              {
                "aria-label": "Select all entries",
                checked: selectedRedirects.length === redirects.length ? true : selectedRedirects.length > 0 && selectedRedirects.length < redirects.length ? "indeterminate" : false,
                onCheckedChange: (checked) => {
                  if (checked) {
                    setSelectedRedirects(
                      redirects.map((redirect) => redirect.documentId).filter(Boolean)
                    );
                  } else {
                    setSelectedRedirects([]);
                  }
                }
              }
            ) }),
            headers.map((header, index) => /* @__PURE__ */ jsx(
              Th,
              {
                onClick: header.isSortable ? () => handleSort(header.key) : void 0,
                style: { cursor: header.isSortable ? "pointer" : "default" },
                children: /* @__PURE__ */ jsxs(
                  Flex,
                  {
                    alignItems: "center",
                    justifyContent: index === headers.length - 1 ? "flex-end" : "",
                    style: { width: index === headers.length - 1 ? "100%" : "auto" },
                    children: [
                      /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: header.label }),
                      header.isSortable && /* @__PURE__ */ jsx(Box, { paddingLeft: 1, children: sortBy === header.key ? sortOrder === "asc" ? /* @__PURE__ */ jsx(ChevronUp, { "aria-label": "Sorted ascending" }) : /* @__PURE__ */ jsx(ChevronDown, { "aria-label": "Sorted descending" }) : null })
                    ]
                  }
                )
              },
              header.key
            ))
          ] }) }),
          /* @__PURE__ */ jsx(Tbody, { children: redirects.map((redirect) => /* @__PURE__ */ jsxs(Tr, { children: [
            /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(
              Checkbox,
              {
                "aria-label": `Select entry ${redirect.id}`,
                checked: selectedRedirects.includes(redirect.documentId ?? ""),
                onCheckedChange: (checked) => {
                  if (checked) {
                    setSelectedRedirects([
                      ...selectedRedirects,
                      redirect.documentId ?? ""
                    ]);
                  } else {
                    setSelectedRedirects(
                      selectedRedirects.filter((id) => id !== (redirect.documentId ?? ""))
                    );
                  }
                }
              }
            ) }),
            /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { children: redirect.source }) }),
            /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { children: redirect.destination }) }),
            /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { children: redirect.permanent ? "Yes" : "No" }) }),
            /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsxs(Flex, { gap: 2, justifyContent: "flex-end", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "secondary",
                  onClick: () => handleEdit(redirect),
                  endIcon: /* @__PURE__ */ jsx(Pencil, {}),
                  children: formatMessage({
                    id: getTranslation("pages.homePage.table.edit"),
                    defaultMessage: "Edit"
                  })
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "danger",
                  onClick: () => {
                    if (redirect.documentId) {
                      handleDelete(redirect.documentId);
                    }
                  },
                  endIcon: /* @__PURE__ */ jsx(Trash, {}),
                  children: formatMessage({
                    id: getTranslation("pages.homePage.table.delete"),
                    defaultMessage: "Delete"
                  })
                }
              )
            ] }) })
          ] }, redirect.id)) })
        ] }),
        /* @__PURE__ */ jsxs(Flex, { justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxs(Field.Root, { name: "pageSize", children: [
            /* @__PURE__ */ jsx(Field.Label, { children: formatMessage({
              id: getTranslation("pages.homePage.entries.title"),
              defaultMessage: "Entries per page"
            }) }),
            /* @__PURE__ */ jsx(
              SingleSelect,
              {
                onChange: (value) => handlePageSizeChange(value),
                value: String(pageSize),
                children: pageSizes.map((size) => /* @__PURE__ */ jsx(SingleSelectOption, { value: String(size), children: size }, size))
              }
            ),
            /* @__PURE__ */ jsx(Field.Hint, {})
          ] }),
          /* @__PURE__ */ jsx(Box, { paddingTop: 4, children: pagination && /* @__PURE__ */ jsx(
            Pagination,
            {
              activePage: pagination.page,
              pageCount: pagination.pageCount,
              handlePageChange
            }
          ) })
        ] })
      ] }) : /* @__PURE__ */ jsx(Box, { background: "neutral100", children: /* @__PURE__ */ jsx(
        EmptyStateLayout,
        {
          icon: /* @__PURE__ */ jsx(NoContentIcon, {}),
          content: formatMessage({
            id: getTranslation("overview.table.body.empty.content"),
            defaultMessage: "You don't have any redirects yet..."
          }),
          action: /* @__PURE__ */ jsx(Button, { variant: "secondary", startIcon: /* @__PURE__ */ jsx(Plus, {}), onClick: handleRedirectModal, children: formatMessage({
            id: getTranslation("overview.table.body.empty.button"),
            defaultMessage: "Create your first Redirect"
          }) })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(
      RedirectModal,
      {
        visible: isRedirectModalOpen,
        selectedRedirect,
        handleCloseRedirectModal,
        onRedirectSaved: getRedirects
      }
    ),
    /* @__PURE__ */ jsx(ImportModal, { visible: isImportModalOpen, handleCloseImportModal })
  ] });
};
const App = () => {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(HomePage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Page.Error, {}) })
  ] });
};
export {
  App
};
