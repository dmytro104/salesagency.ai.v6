"use client";

import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { Monitor, Moon, Sun } from "@phosphor-icons/react";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import "./kibo-theme-switcher.css";

const themes = [
  {
    key: "system",
    icon: Monitor,
    label: "System theme",
  },
  {
    key: "light",
    icon: Sun,
    label: "Light theme",
  },
  {
    key: "dark",
    icon: Moon,
    label: "Dark theme",
  },
];

export type ThemeSwitcherProps = {
  value?: "light" | "dark" | "system";
  onChange?: (theme: "light" | "dark" | "system") => void;
  defaultValue?: "light" | "dark" | "system";
  className?: string;
};

export const ThemeSwitcher = ({
  value,
  onChange,
  defaultValue = "system",
  className,
}: ThemeSwitcherProps) => {
  const [, setTheme] = useControllableState({
    defaultProp: defaultValue,
    prop: value,
    onChange,
  });

  const handleThemeClick = useCallback(
    (themeKey: "light" | "dark" | "system") => {
      setTheme(themeKey);
    },
    [setTheme]
  );

  return (
    <div
      className={cn(
        "relative isolate flex items-center h-8 rounded-full bg-background p-1 ring-1 ring-border",
        className
      )}
    >
      {themes.map(({ key, icon: Icon, label }) => {
        return (
          <button
            aria-label={label}
            data-theme-key={key}
            className="theme-switcher-button relative h-6 w-6 rounded-full cursor-pointer flex items-center justify-center"
            key={key}
            onClick={() => handleThemeClick(key as "light" | "dark" | "system")}
            type="button"
          >
            {/* Background - visibility and color controlled by CSS based on html theme class */}
            <div className="theme-switcher-bg absolute inset-0 rounded-full transition-opacity duration-200" />

            {/* Icon - opacity controlled by CSS based on html theme class */}
            <Icon className="theme-switcher-icon relative z-10 h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
};
