# Beginner Feature Discovery Guide

This guide helps beginner VS Code users discover common features that are useful but not always obvious at first.

## 1. Command Palette

The Command Palette is one of the most important discovery tools in VS Code.

- macOS: Cmd + Shift + P
- Windows/Linux: Ctrl + Shift + P

Users can search for actions instead of memorizing menu locations. This supports learnability and discoverability.

## 2. Settings UI

The Settings UI allows users to search for configuration options visually.

Useful searches include:

- Font size
- Theme
- Format on save
- Auto save
- Terminal
- Extensions

This helps users customize VS Code without editing JSON manually.

## 3. Extensions View

The Extensions view lets users add new functionality without changing VS Code core code.

Examples include:

- Language support
- Themes
- Debuggers
- Linters
- Formatters
- Productivity tools

This demonstrates VS Code's plug-in architecture and the Open-Closed Principle.

## 4. Integrated Terminal

The integrated terminal lets users run project commands without leaving the editor.

Examples:

- npm install
- npm test
- git status
- python main.py

## 5. Why This Improves Usability

VS Code is powerful, but beginners may not know where features are located. This guide reduces cognitive load by introducing important features gradually.

Architecturally, this guide fits VS Code because it uses the extension system instead of modifying the Workbench or Editor core. It adds new user-facing guidance through extension contribution points.
