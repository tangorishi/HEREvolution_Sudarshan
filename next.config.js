/** @type {import('next').NextConfig} */

const {parsed: localEnv} = require('dotenv').config()
const webpack = require('webpack')

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config) => {
        config.plugins.push(
            new webpack.EnvironmentPlugin(localEnv)
        )
        return config
    }
}

module.exports = nextConfig
