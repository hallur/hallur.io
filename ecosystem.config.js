module.exports = {
  apps : [{
    name: 'hallur.io',
    script: 'bin/www',
    exec_mode: 'cluster',
    instances: 'max',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    },
    env_development: {
      NODE_ENV: 'development'
    }
  }]
};
