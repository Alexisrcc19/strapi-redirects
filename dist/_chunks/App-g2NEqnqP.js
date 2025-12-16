"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const admin = require("@strapi/strapi/admin");
const reactRouterDom = require("react-router-dom");
const reactIntl = require("react-intl");
const index = require("./index-CM2X5Pet.js");
const React = require("react");
const useDebounce = require("use-debounce");
require("react-dom/client");
const designSystem = require("@strapi/design-system");
const icons = require("@strapi/icons");
require("@strapi/icons/symbols");
const styled = require("styled-components");
const csvtojson = require("csvtojson");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
const styled__default = /* @__PURE__ */ _interopDefault(styled);
const csvtojson__default = /* @__PURE__ */ _interopDefault(csvtojson);
const NotificationsContext = /* @__PURE__ */ React__namespace.createContext({
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
const useNotification = () => React__namespace.useContext(NotificationsContext);
const redirectTableHeaders = (formatMessage) => [
  {
    name: "source",
    label: formatMessage({
      id: index.getTranslation("overview.table.headers.source"),
      defaultMessage: "Source"
    }),
    key: "source",
    isSortable: true
  },
  {
    name: "destination",
    label: formatMessage({
      id: index.getTranslation("overview.table.headers.destination"),
      defaultMessage: "Destination"
    }),
    key: "destination",
    isSortable: true
  },
  {
    name: "permanent",
    label: formatMessage({
      id: index.getTranslation("overview.table.headers.permanent"),
      defaultMessage: "Permanent"
    }),
    key: "permanent",
    isSortable: true
  },
  {
    name: "actions",
    label: formatMessage({
      id: index.getTranslation("overview.table.headers.actions"),
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
  const { search, pathname } = reactRouterDom.useLocation();
  const navigate = reactRouterDom.useNavigate();
  const [pageSize, setPageSize] = React.useState(() => {
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
  return React.useMemo(() => {
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
const NoContentIcon = () => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16rem",
    height: "16",
    fill: "none",
    viewBox: "0 0 217 121",
    children: [
      /* @__PURE__ */ jsxRuntime.jsxs("g", { clipPath: "url(#EmptyDocuments_svg__a)", opacity: "0.84", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            fill: "#D9D8FF",
            fillOpacity: "0.8",
            fillRule: "evenodd",
            d: "M189.917 20.442a7.583 7.583 0 0 1 0 15.167h-43.334a7.584 7.584 0 1 1 0 15.167h23.834a7.583 7.583 0 0 1 0 15.166h-11.022c-5.281 0-9.562 3.396-9.562 7.584q0 2.934 3.19 5.479c2.017 1.608 4.824 1.818 7.065 3.097a7.584 7.584 0 0 1-3.755 14.174H66.417a7.583 7.583 0 1 1 0-15.167h-42.25a7.583 7.583 0 0 1 0-15.167H67.5a7.583 7.583 0 0 0 0-15.166H40.417a7.583 7.583 0 0 1 0-15.167H83.75a7.583 7.583 0 0 1 0-15.167zm0 30.334a7.583 7.583 0 0 1 0 15.166 7.584 7.584 0 0 1 0-15.166",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            fill: "#fff",
            fillRule: "evenodd",
            d: "m133.228 20.443 10.077 73.496.905 7.373a4.33 4.33 0 0 1-3.773 4.829l-63.44 7.79a4.334 4.334 0 0 1-4.83-3.773l-9.766-79.547a2.167 2.167 0 0 1 1.886-2.414l.023-.003 5.263-.59zm-59.4 6.683 4.97-.557z",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            stroke: "#7B79FF",
            strokeWidth: "2.5",
            d: "m73.829 27.126 4.97-.557m54.429-6.126 10.077 73.496.905 7.373a4.33 4.33 0 0 1-3.773 4.829l-63.44 7.79a4.334 4.334 0 0 1-4.83-3.773l-9.766-79.547a2.167 2.167 0 0 1 1.886-2.414l.023-.003 5.263-.59z"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            fill: "#F0F0FF",
            fillRule: "evenodd",
            d: "m130.485 25.068 9.121 66.607.821 6.683c.264 2.152-1.246 4.109-3.373 4.37l-56.812 6.976c-2.128.261-4.066-1.272-4.33-3.425l-8.83-71.908a2.166 2.166 0 0 1 1.887-2.414l7.028-.863",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
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
        /* @__PURE__ */ jsxRuntime.jsx(
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
      /* @__PURE__ */ jsxRuntime.jsx("defs", { children: /* @__PURE__ */ jsxRuntime.jsx("clipPath", { id: "EmptyDocuments_svg__a", children: /* @__PURE__ */ jsxRuntime.jsx("path", { fill: "#fff", d: "M.667.797h216v120h-216z" }) }) })
    ]
  }
);
const importTableHeaders = (formatMessage) => [
  {
    name: "source",
    label: formatMessage({
      id: index.getTranslation("overview.table.headers.source"),
      defaultMessage: "Source"
    }),
    key: "source",
    isSortable: true
  },
  {
    name: "destination",
    label: formatMessage({
      id: index.getTranslation("overview.table.headers.destination"),
      defaultMessage: "Destination"
    }),
    key: "destination",
    isSortable: true
  },
  {
    name: "permanent",
    label: formatMessage({
      id: index.getTranslation("overview.table.headers.permanent"),
      defaultMessage: "Permanent"
    }),
    key: "permanent",
    isSortable: true
  },
  {
    name: "status",
    label: formatMessage({
      id: index.getTranslation("overview.table.headers.status"),
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
    const dataRaw = await csvtojson__default.default().fromString(data);
    const redirects = dataRaw.map(
      (item) => ({
        source: item.source,
        destination: item.destination,
        permanent: item.permanent.toLowerCase() === "true"
      })
    );
    const validationResults = redirects.map((redirect, index2, self) => {
      if (isImmediateLoop(redirect.source, redirect.destination)) {
        return {
          ...redirect,
          status: "INVALID",
          reason: "Immediate loop detected",
          details: { type: "LOOP_DETECTED" }
        };
      }
      if (findDuplicate(self.slice(0, index2), redirect.source)) {
        return {
          ...redirect,
          status: "INVALID",
          reason: "Duplicate redirect",
          details: { type: "DUPLICATE" }
        };
      }
      if (isIndirectLoop(
        self.filter((_, idx) => idx !== index2),
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
const StyledLabel = styled__default.default.label`
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
const HiddenInput = styled__default.default.input`
  display: none;
`;
const ImportModal = ({ visible, handleCloseImportModal }) => {
  const { formatMessage } = reactIntl.useIntl();
  const { post } = index.useFetchClient();
  const [redirects, setRedirects] = React.useState([]);
  const [sortBy, setSortBy] = React.useState("source");
  const [sortOrder, setSortOrder] = React.useState("desc");
  const [isDragOver, setIsDragOver] = React.useState(false);
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
      const response = await post(`/${index.PLUGIN_ID}/import`, dataToImport);
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
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Root, { onOpenChange: handleCloseImportModal, open: visible, labelledBy: "title", children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Modal.Content, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Header, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Title, { id: "title", children: formatMessage({
      id: index.getTranslation("modal.import.title"),
      defaultMessage: "Import Redirects"
    }) }) }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Modal.Body, { children: [
      redirects.length === 0 && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { children: /* @__PURE__ */ jsxRuntime.jsxs(
        StyledLabel,
        {
          isDragOver,
          onDragEnter: handleDragOver,
          onDragOver: handleDragOver,
          onDragLeave: handleDragLeave,
          onDrop: handleDrop,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { padding: 4, children: /* @__PURE__ */ jsxRuntime.jsx(
              icons.File,
              {
                width: "24px",
                height: "24px",
                color: isDragOver ? "hsl(210, 100%, 50%)" : "neutral600"
              }
            ) }),
            /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.Typography,
              {
                variant: "beta",
                textColor: isDragOver ? "hsl(210, 100%, 50%)" : "neutral600",
                as: "p",
                children: formatMessage({
                  id: index.getTranslation("modal.import.dragAndDrop"),
                  defaultMessage: "Drag and drop your CSV file here, or click to upload"
                })
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(HiddenInput, { type: "file", accept: ".csv", onChange: handleFileChange })
          ]
        }
      ) }),
      redirects.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Table, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Thead, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tr, { children: headers.map((header, index2) => /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.Th,
          {
            onClick: header.isSortable ? () => handleSort(header.key) : void 0,
            style: { cursor: header.isSortable ? "pointer" : "default" },
            children: /* @__PURE__ */ jsxRuntime.jsxs(
              designSystem.Flex,
              {
                alignItems: "center",
                justifyContent: index2 === headers.length - 1 ? "flex-end" : "",
                style: { width: index2 === headers.length - 1 ? "100%" : "auto" },
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: header.label }),
                  header.isSortable && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingLeft: 1, children: sortBy === header.key ? sortOrder === "asc" ? /* @__PURE__ */ jsxRuntime.jsx(icons.ChevronUp, { "aria-label": "Sorted ascending" }) : /* @__PURE__ */ jsxRuntime.jsx(icons.ChevronDown, { "aria-label": "Sorted descending" }) : null })
                ]
              }
            )
          },
          header.key
        )) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tbody, { children: redirects.map((redirect, idx) => /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Tr, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: redirect.source }) }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: redirect.destination }) }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: redirect.permanent ? "Yes" : "No" }) }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { width: "100%", justifyContent: "flex-end", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: redirect.status }) }) })
        ] }, idx)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Modal.Footer, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Close, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { variant: "tertiary", onClick: handleCloseImportModal, children: formatMessage({
        id: index.getTranslation("modal.cancel"),
        defaultMessage: "Cancel"
      }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.Button,
        {
          type: "submit",
          startIcon: /* @__PURE__ */ jsxRuntime.jsx(icons.Upload, {}),
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
  const { formatMessage } = reactIntl.useIntl();
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
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Pagination, { activePage, pageCount, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.PreviousLink,
      {
        onClick: () => handlePageChange(activePage > 1 ? activePage - 1 : 1),
        disabled: activePage === 1,
        children: formatMessage({
          id: "components.pagination.go-to-previous",
          defaultMessage: "Go to previous page"
        })
      }
    ),
    items.map((item, index2) => {
      if (typeof item === "number") {
        return /* @__PURE__ */ jsxRuntime.jsx(designSystem.PageLink, { onClick: () => handlePageChange(item), number: item, children: formatMessage(
          {
            id: "components.pagination.go-to",
            defaultMessage: "Go to page {page}"
          },
          { page: item }
        ) }, index2);
      }
      return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Dots, {}, index2);
    }),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.NextLink,
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
  const { formatMessage } = reactIntl.useIntl();
  const { toggleNotification } = useNotification();
  const { get, del, post } = index.useFetchClient();
  const pageSizes = [5, 10, 20, 50];
  const headers = redirectTableHeaders(formatMessage);
  const { pageSize, page, setNewPage, setNewPageSize } = useSearchQuery();
  const [isFetching, setIsFetching] = React.useState(false);
  const [redirects, setRedirects] = React.useState([]);
  const [selectedRedirect, setSelectedRedirect] = React.useState(null);
  const [sortBy, setSortBy] = React.useState("createdAt");
  const [sortOrder, setSortOrder] = React.useState("desc");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [debouncedSearchTerm] = useDebounce.useDebounce(searchTerm, 500);
  const [pagination, setPagination] = React.useState({
    page: 1,
    pageSize: 10,
    pageCount: 1,
    total: 0
  });
  const [publishingStage, setPublishingStage] = React.useState(null);
  const [isRedirectModalOpen, setIsRedirectModalOpen] = React.useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = React.useState(false);
  const [selectedRedirects, setSelectedRedirects] = React.useState([]);
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
      await del(`${index.PLUGIN_ID}/${documentId}`);
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
      await Promise.all(selectedRedirects.map((documentId) => del(`${index.PLUGIN_ID}/${documentId}`)));
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
  const handlePublishRedirects = async (stage) => {
    setPublishingStage(stage);
    try {
      await post(`/${index.PLUGIN_ID}/publish`, { stage });
      toggleNotification({
        type: "success",
        message: formatMessage({
          id: index.getTranslation(
            stage === "prod" ? "pages.homePage.header.button.publishProd.success" : "pages.homePage.header.button.publishStg.success"
          ),
          defaultMessage: stage === "prod" ? "Production publish started" : "Staging publish started"
        })
      });
    } catch (error) {
      console.error("Error publishing redirects", error);
      toggleNotification({
        type: "warning",
        message: formatMessage({
          id: index.getTranslation(
            stage === "prod" ? "pages.homePage.header.button.publishProd.error" : "pages.homePage.header.button.publishStg.error"
          ),
          defaultMessage: "Failed to trigger publish"
        })
      });
    } finally {
      setPublishingStage(null);
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
      const queryString = index.lib.stringify(queryObject, { encodeValuesOnly: true });
      const { data } = await get(`/${index.PLUGIN_ID}?${queryString}`);
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
  React.useEffect(() => {
    getRedirects();
  }, [sortBy, sortOrder, pageSize, page, searchQuery]);
  React.useEffect(() => {
    setSearchQuery(debouncedSearchTerm);
    setNewPage(1);
  }, [debouncedSearchTerm]);
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { style: { maxWidth: "calc(100vw - 75px)" }, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      index.Layouts.Header,
      {
        primaryAction: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 4, children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { variant: "secondary", startIcon: /* @__PURE__ */ jsxRuntime.jsx(icons.Upload, {}), onClick: handleImportModal, children: formatMessage({
            id: index.getTranslation("pages.homePage.header.button.import"),
            defaultMessage: "Import Redirects"
          }) }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { variant: "primary", startIcon: /* @__PURE__ */ jsxRuntime.jsx(icons.Plus, {}), onClick: handleRedirectModal, children: formatMessage({
            id: index.getTranslation("pages.homePage.header.button.redirect"),
            defaultMessage: "Add a Redirect"
          }) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.Button,
            {
              variant: "primary",
              startIcon: /* @__PURE__ */ jsxRuntime.jsx(icons.CloudUpload, {}),
              loading: publishingStage === "stg",
              disabled: publishingStage !== null,
              onClick: () => handlePublishRedirects("stg"),
              children: formatMessage({
                id: index.getTranslation("pages.homePage.header.button.publishStg"),
                defaultMessage: "Publish redirects (stg)"
              })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.Button,
            {
              variant: "primary",
              startIcon: /* @__PURE__ */ jsxRuntime.jsx(icons.CloudUpload, {}),
              loading: publishingStage === "prod",
              disabled: publishingStage !== null,
              onClick: () => handlePublishRedirects("prod"),
              children: formatMessage({
                id: index.getTranslation("pages.homePage.header.button.publishProd"),
                defaultMessage: "Publish redirects (prod)"
              })
            }
          )
        ] }),
        title: formatMessage({
          id: index.getTranslation("plugin.name"),
          defaultMessage: "Redirects"
        }),
        subtitle: formatMessage(
          {
            id: index.getTranslation("pages.homePage.header.subtitle"),
            defaultMessage: "{number, plural, =0 {# entries} one {# entry} other {# entries}} found"
          },
          { number: pagination?.total }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(index.Layouts.Content, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 4, direction: "column", alignItems: "stretch", marginBottom: 8, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingBottom: 4, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 4, alignItems: "center", children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.SearchForm, { children: /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.Searchbar,
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
        selectedRedirects.length > 0 && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { variant: "danger", onClick: handleBulkDelete, endIcon: /* @__PURE__ */ jsxRuntime.jsx(icons.Trash, {}), children: formatMessage({
          id: "pages.homePage.bulkDelete",
          defaultMessage: "Delete Selected"
        }) })
      ] }) }),
      isFetching ? /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { padding: 4, direction: "column", justifyContent: "center", alignItems: "center", children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Loader, {}),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { marginLeft: 2, children: formatMessage({ id: "loading", defaultMessage: "Loading..." }) })
      ] }) : redirects.length > 0 ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Table, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Thead, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Tr, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.Checkbox,
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
            headers.map((header, index2) => /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.Th,
              {
                onClick: header.isSortable ? () => handleSort(header.key) : void 0,
                style: { cursor: header.isSortable ? "pointer" : "default" },
                children: /* @__PURE__ */ jsxRuntime.jsxs(
                  designSystem.Flex,
                  {
                    alignItems: "center",
                    justifyContent: index2 === headers.length - 1 ? "flex-end" : "",
                    style: { width: index2 === headers.length - 1 ? "100%" : "auto" },
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: header.label }),
                      header.isSortable && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingLeft: 1, children: sortBy === header.key ? sortOrder === "asc" ? /* @__PURE__ */ jsxRuntime.jsx(icons.ChevronUp, { "aria-label": "Sorted ascending" }) : /* @__PURE__ */ jsxRuntime.jsx(icons.ChevronDown, { "aria-label": "Sorted descending" }) : null })
                    ]
                  }
                )
              },
              header.key
            ))
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tbody, { children: redirects.map((redirect) => /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Tr, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.Checkbox,
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
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: redirect.source }) }),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: redirect.destination }) }),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: redirect.permanent ? "Yes" : "No" }) }),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, justifyContent: "flex-end", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                designSystem.Button,
                {
                  variant: "secondary",
                  onClick: () => handleEdit(redirect),
                  endIcon: /* @__PURE__ */ jsxRuntime.jsx(icons.Pencil, {}),
                  children: formatMessage({
                    id: index.getTranslation("pages.homePage.table.edit"),
                    defaultMessage: "Edit"
                  })
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                designSystem.Button,
                {
                  variant: "danger",
                  onClick: () => {
                    if (redirect.documentId) {
                      handleDelete(redirect.documentId);
                    }
                  },
                  endIcon: /* @__PURE__ */ jsxRuntime.jsx(icons.Trash, {}),
                  children: formatMessage({
                    id: index.getTranslation("pages.homePage.table.delete"),
                    defaultMessage: "Delete"
                  })
                }
              )
            ] }) })
          ] }, redirect.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Field.Root, { name: "pageSize", children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Label, { children: formatMessage({
              id: index.getTranslation("pages.homePage.entries.title"),
              defaultMessage: "Entries per page"
            }) }),
            /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.SingleSelect,
              {
                onChange: (value) => handlePageSizeChange(value),
                value: String(pageSize),
                children: pageSizes.map((size) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: String(size), children: size }, size))
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Hint, {})
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: pagination && /* @__PURE__ */ jsxRuntime.jsx(
            Pagination,
            {
              activePage: pagination.page,
              pageCount: pagination.pageCount,
              handlePageChange
            }
          ) })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { background: "neutral100", children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.EmptyStateLayout,
        {
          icon: /* @__PURE__ */ jsxRuntime.jsx(NoContentIcon, {}),
          content: formatMessage({
            id: index.getTranslation("overview.table.body.empty.content"),
            defaultMessage: "You don't have any redirects yet..."
          }),
          action: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { variant: "secondary", startIcon: /* @__PURE__ */ jsxRuntime.jsx(icons.Plus, {}), onClick: handleRedirectModal, children: formatMessage({
            id: index.getTranslation("overview.table.body.empty.button"),
            defaultMessage: "Create your first Redirect"
          }) })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx(
      index.RedirectModal,
      {
        visible: isRedirectModalOpen,
        selectedRedirect,
        handleCloseRedirectModal,
        onRedirectSaved: getRedirects
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(ImportModal, { visible: isImportModalOpen, handleCloseImportModal })
  ] });
};
const App = () => {
  return /* @__PURE__ */ jsxRuntime.jsxs(reactRouterDom.Routes, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { index: true, element: /* @__PURE__ */ jsxRuntime.jsx(HomePage, {}) }),
    /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: "*", element: /* @__PURE__ */ jsxRuntime.jsx(admin.Page.Error, {}) })
  ] });
};
exports.App = App;
