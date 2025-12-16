"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const reactIntl = require("react-intl");
require("react-dom/client");
const designSystem = require("@strapi/design-system");
require("@strapi/icons");
const index = require("./index-1r723z2F.js");
require("react-router-dom");
require("@strapi/icons/symbols");
require("styled-components");
const Settings = () => {
  const { formatMessage } = reactIntl.useIntl();
  const { get, post } = index.useFetchClient();
  const [contentTypes, setContentTypes] = React.useState([]);
  const [lifecycleSettings, setLifecycleSettings] = React.useState([]);
  const fetchContentTypes = async () => {
    try {
      const res = await get(`/${index.PLUGIN_ID}/content-types`);
      setContentTypes(res.data || []);
    } catch (error) {
      console.error("Error fetching content types:", error);
    }
  };
  const fetchLifecycleSettings = async () => {
    try {
      const res = await get(`/${index.PLUGIN_ID}/settings`);
      const settings = res.data || [];
      const settingsArray = Array.isArray(settings) ? settings : Object.entries(settings).map(
        ([uid, value]) => ({ uid, ...value })
      );
      setLifecycleSettings(settingsArray);
    } catch (error) {
      console.error("Error fetching lifecycle settings:", error);
      setLifecycleSettings([]);
    }
  };
  const updateSingleSetting = async (uid, changes) => {
    try {
      await post(`/${index.PLUGIN_ID}/settings`, { uid, ...changes });
    } catch (error) {
      console.error("Error updating lifecycle setting:", error);
    }
  };
  const handleToggle = (uid, enabled) => {
    setLifecycleSettings(
      (prev) => prev.map((setting) => setting.uid === uid ? { ...setting, enabled } : setting)
    );
    const current = lifecycleSettings.find((setting) => setting.uid === uid) || { field: "" };
    updateSingleSetting(uid, { enabled, field: current.field });
  };
  const handleFieldChange = (uid, field) => {
    setLifecycleSettings(
      (prev) => prev.map((setting) => setting.uid === uid ? { ...setting, field } : setting)
    );
    const current = lifecycleSettings.find((setting) => setting.uid === uid) || { enabled: false };
    updateSingleSetting(uid, { field, enabled: current.enabled });
  };
  React.useEffect(() => {
    fetchContentTypes();
    fetchLifecycleSettings();
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      index.Layouts.Header,
      {
        title: formatMessage({
          id: `${index.PLUGIN_ID}.settings.title`,
          defaultMessage: "Lifecycle Settings"
        }),
        subtitle: formatMessage({
          id: `${index.PLUGIN_ID}.settings.subtitle`,
          defaultMessage: "Enable or disable lifecycle hooks and select fields for each content type (auto-saves)."
        })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(index.Layouts.Content, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { padding: 4, background: "neutral0", children: contentTypes.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: "No content types found." }) : /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Table, { colCount: 4, rowCount: contentTypes.length + 1, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Thead, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Tr, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: "Content Type" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: "UID" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: "Enabled" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: "Field" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tbody, { children: contentTypes.map((ct) => {
        const setting = lifecycleSettings.find((s) => s.uid === ct.uid) || {
          uid: ct.uid,
          enabled: false,
          field: ""
        };
        return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Tr, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: ct.info?.displayName || ct.uid }) }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral600", children: ct.uid }) }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.Checkbox,
            {
              checked: setting.enabled,
              onCheckedChange: () => handleToggle(ct.uid, !setting.enabled)
            }
          ) }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.SingleSelect,
            {
              placeholder: "Select field",
              value: setting.field,
              onChange: (value) => handleFieldChange(ct.uid, value),
              disabled: !setting.enabled,
              children: ct.fields.map((field) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: field.name, children: field.name }, field.name))
            }
          ) })
        ] }, ct.uid);
      }) })
    ] }) }) })
  ] });
};
exports.Settings = Settings;
