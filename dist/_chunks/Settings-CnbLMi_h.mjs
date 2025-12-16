import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import "react-dom/client";
import { Main, Box, Typography, Table, Thead, Tr, Th, Tbody, Td, Checkbox, SingleSelect, SingleSelectOption } from "@strapi/design-system";
import "@strapi/icons";
import { u as useFetchClient, L as Layouts, P as PLUGIN_ID } from "./index-DlLBvc9Y.mjs";
import "react-router-dom";
import "@strapi/icons/symbols";
import "styled-components";
const Settings = () => {
  const { formatMessage } = useIntl();
  const { get, post } = useFetchClient();
  const [contentTypes, setContentTypes] = useState([]);
  const [lifecycleSettings, setLifecycleSettings] = useState([]);
  const fetchContentTypes = async () => {
    try {
      const res = await get(`/${PLUGIN_ID}/content-types`);
      setContentTypes(res.data || []);
    } catch (error) {
      console.error("Error fetching content types:", error);
    }
  };
  const fetchLifecycleSettings = async () => {
    try {
      const res = await get(`/${PLUGIN_ID}/settings`);
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
      await post(`/${PLUGIN_ID}/settings`, { uid, ...changes });
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
  useEffect(() => {
    fetchContentTypes();
    fetchLifecycleSettings();
  }, []);
  return /* @__PURE__ */ jsxs(Main, { children: [
    /* @__PURE__ */ jsx(
      Layouts.Header,
      {
        title: formatMessage({
          id: `${PLUGIN_ID}.settings.title`,
          defaultMessage: "Lifecycle Settings"
        }),
        subtitle: formatMessage({
          id: `${PLUGIN_ID}.settings.subtitle`,
          defaultMessage: "Enable or disable lifecycle hooks and select fields for each content type (auto-saves)."
        })
      }
    ),
    /* @__PURE__ */ jsx(Layouts.Content, { children: /* @__PURE__ */ jsx(Box, { padding: 4, background: "neutral0", children: contentTypes.length === 0 ? /* @__PURE__ */ jsx(Typography, { children: "No content types found." }) : /* @__PURE__ */ jsxs(Table, { colCount: 4, rowCount: contentTypes.length + 1, children: [
      /* @__PURE__ */ jsx(Thead, { children: /* @__PURE__ */ jsxs(Tr, { children: [
        /* @__PURE__ */ jsx(Th, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: "Content Type" }) }),
        /* @__PURE__ */ jsx(Th, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: "UID" }) }),
        /* @__PURE__ */ jsx(Th, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: "Enabled" }) }),
        /* @__PURE__ */ jsx(Th, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: "Field" }) })
      ] }) }),
      /* @__PURE__ */ jsx(Tbody, { children: contentTypes.map((ct) => {
        const setting = lifecycleSettings.find((s) => s.uid === ct.uid) || {
          uid: ct.uid,
          enabled: false,
          field: ""
        };
        return /* @__PURE__ */ jsxs(Tr, { children: [
          /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { children: ct.info?.displayName || ct.uid }) }),
          /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { textColor: "neutral600", children: ct.uid }) }),
          /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: setting.enabled,
              onCheckedChange: () => handleToggle(ct.uid, !setting.enabled)
            }
          ) }),
          /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(
            SingleSelect,
            {
              placeholder: "Select field",
              value: setting.field,
              onChange: (value) => handleFieldChange(ct.uid, value),
              disabled: !setting.enabled,
              children: ct.fields.map((field) => /* @__PURE__ */ jsx(SingleSelectOption, { value: field.name, children: field.name }, field.name))
            }
          ) })
        ] }, ct.uid);
      }) })
    ] }) }) })
  ] });
};
export {
  Settings
};
