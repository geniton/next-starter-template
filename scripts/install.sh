#!/bin/bash
set -e

echo "Clearing pnpm cache..."
pnpm store prune

echo "Installing dependencies..."
pnpm install --frozen-lockfile

echo "Installation completed successfully!"
