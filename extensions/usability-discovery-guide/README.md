# Usability Discovery Guide Extension

This extension is a small usability-focused improvement prototype for Visual Studio Code.

## Purpose

The goal is to improve beginner feature discovery. VS Code has many powerful features, but new users may not immediately know how to find the Command Palette, Settings UI, Extensions view, or integrated Terminal.

## Features

This extension contributes:

- A Command Palette command: Discovery Guide: Open Beginner Feature Discovery Guide
- A beginner-facing guide document
- A walkthrough proposal for discovering common VS Code features
- A configuration setting for beginner tips

## Architectural Fit

This improvement fits VS Code's architecture because it uses the existing extension system. It does not require invasive changes to the Workbench, Editor, Platform, or Base layers.

The extension uses contribution points such as commands, configuration, and walkthroughs. This connects directly to VS Code's plug-in architecture and supports the Open-Closed Principle: the system can be extended with new guidance behavior without modifying core editor functionality.

## Usability Benefit

This extension improves learnability and discoverability by helping users find important features through a guided experience. It reduces cognitive load for beginners and provides a clear entry point into common VS Code workflows.
