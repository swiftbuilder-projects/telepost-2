# Base image for building
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
# We copy package.json and install to generate a lockfile (since this is a fresh repo)
COPY package.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Install fresh production dependencies only
# We copy the package.json AND the lockfile generated in the builder stage
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

# Use npm ci for reproducible installs, skipping devDependencies
RUN npm ci --only=production

# Copy built artifacts
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose port
EXPOSE 3000

# Start command
CMD ["npm", "start"]
