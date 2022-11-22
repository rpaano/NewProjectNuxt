module.exports = {
  apps : [{
    script: 'npm run preview',
  },],

  deploy : {
    production : {
      key  : '~/.cert/key.cer',
      user : 'ubuntu',
      host : '13.212.196.162',
      ref  : 'origin/master',
      repo : 'git@github.com:rpaano/NewProjectNuxt.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
