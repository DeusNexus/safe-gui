const express = require('express')
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const app = express()
const port = 3000

async function shell(command){
    console.log('COMMAND: ',command)
    const { stdout, stderr } = await exec(command);
    stderr ? console.log(stderr) : console.log(stdout)
    return stderr ? `> $ ${command}` + '\n' + stderr + '\n' : `> $ ${command}` + '\n' + stdout + '\n'
}

async function handleCMD(cmd,req) {
    console.log('URL: ',req.url)
    let body = { 
        console: '', 
        error: '' 
    }
    
    try {
        body.console += await shell(cmd)
    } catch(e) {
        body.error += e
    }

    console.log('RESPONSE: ',body)
    return body
}

app.use(express.json())

/**
 * AUTH
 * **/
app.post('/api/auth', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe auth ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/allow/:reqId', async (req, res) => {
    const reqId = req.params.reqId
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe auth allow ${reqId} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/apps', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe auth apps ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/bin-version', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe auth bin-version ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/clear', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe auth clear ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/create', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe auth create ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/deny/:reqId', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const reqId = req.params.reqId
    body = await handleCMD(`safe auth deny ${reqId} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/help', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe auth help ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/install', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe auth install ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/lock', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe auth lock ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/reqs', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe auth reqs ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/restart', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe auth restart ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/revoke/:appId', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const appId = req.params.appId
    body = await handleCMD(`safe auth revoke ${appId} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/start', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe auth start ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/status', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe auth status ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/stop', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe auth stop ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/subscribe/:notifsEndpoint', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const notifsEndpoint = req.params.notifsEndpoint
    body = await handleCMD(`safe auth subscribe ${notifsEndpoint} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/unlock', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe auth unlock ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/unsubscribe/:notifsEndpoint', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const notifsEndpoint = req.params.notifsEndpoint
    body = await handleCMD(`safe auth unsubscribe ${notifsEndpoint} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/auth/update', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe auth update ${flags} ${options}`,req)
    return res.json(body)
})

/**
 * CAT
 * **/
app.post('/api/cat/:location', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const location = decodeURIComponent(req.params.location)
    body = await handleCMD(`safe cat ${location} ${flags} ${options}`,req)
    return res.json(body)
})

/**
 * CONFIG
 * **/
 app.post('/api/config', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe config  ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/config/add', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe config add${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/config/add/network/:networkName/:configLocation', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const networkName = req.params.networkName
    const configLocation = req.params.configLocation
    body = await handleCMD(`safe config add network ${networkName} ${configLocation} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/config/clear', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe config clear ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/config/help', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe config help${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/config/remove', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe config remove ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/config/remove/network/:networkName', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const networkName = req.params.networkName
    body = await handleCMD(`safe config remove network ${networkName} ${flags} ${options}`,req)
    return res.json(body)
})

/**
 * DOG
 * **/
app.post('/api/dog/:location', async (req, res) => {
    console.log(req.params)
    const flags = req.body.flags
    const options = req.body.options
    const location = decodeURIComponent(req.params.location)
    body = await handleCMD(`safe dog ${location} ${flags} ${options}`,req)
    return res.json(body)
})

/**
 * FILES
 * **/
app.post('/api/files/add/:location/:target', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const location = req.params.location
    const target = req.params.target
    body = await handleCMD(`safe files add ${location} ${target} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/files/get/:source/:dest', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const source = req.params.source
    const dest = req.params.dest
    body = await handleCMD(`safe files get ${source} ${dest} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/files/help', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe files help ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/files/ls/:target', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const target = req.params.target
    body = await handleCMD(`safe files ls ${target} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/files/put/:location/:dest', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const location = req.params.location
    const dest = req.params.dest
    body = await handleCMD(`safe files put ${location} ${dest} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/files/rm/:target', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const target = req.params.target
    body = await handleCMD(`safe files rm ${target} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/files/sync/:location/:target', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const location = req.params.location
    const target = req.params.target
    body = await handleCMD(`safe files sync ${location} ${target} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/files/tree/:target', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const target = req.params.target
    body = await handleCMD(`safe files tree ${target} ${flags} ${options}`,req)
    return res.json(body)
})

/**
 * HELP
 * **/
 app.post('/api/help', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe help ${flags} ${options}`,req)
    return res.json(body)
})

/**
 * KEYS
 * **/
app.post('/api/keys/balance', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe keys balance ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/keys/create', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe keys create ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/keys/help', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe keys help ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/keys/show', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe keys show ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/keys/show/:keyUrl', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const keyUrl = decodeURIComponent(req.params.keyUrl)
    body = await handleCMD(`safe keys show ${keyUrl} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/keys/transfer/:amount', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const amount = req.params.amount
    body = await handleCMD(`safe keys transfer ${amount} ${flags} ${options}`,req)
    return res.json(body)
})

/**
 * NETWORKS
 * **/
 app.post('/api/networks', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe networks ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/networks/add/:networkName/:configLocation', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const networkName = req.params.networkName
    const configLocation =  req.params.configLocation
    body = await handleCMD(`safe networks add ${networkName} ${configLocation} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/networks/add/:networkName/:configLocation', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const networkName = req.params.networkName
    const configLocation =  req.params.configLocation
    body = await handleCMD(`safe networks add ${networkName} ${configLocation} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/networks/check', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe networks check ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/networks/help', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe networks help ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/networks/remove/:networkName', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const networkName = req.params.networkName
    body = await handleCMD(`safe networks remove ${networkName} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/networks/set/:networkName/:addresses', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const networkName = req.params.networkName
    const addresses = req.params.addresses
    body = await handleCMD(`safe networks remove ${networkName} ${addresses} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/networks/switch/:networkName', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const networkName = req.params.networkName
    body = await handleCMD(`safe networks switch ${networkName} ${flags} ${options}`,req)
    return res.json(body)
})

/**
 * NODE
 * **/
app.post('/api/node/bin-version', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe node bin-version ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/node/help', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe node help ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/node/install', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe node install ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/node/join/:networkName', async (req, res) => {
    console.log(req.params)
    const flags = req.body.flags
    const options = req.body.options
    const networkName = req.params.networkName
    body = await handleCMD(`safe node join ${networkName} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/node/killall', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe node killall ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/node/run-baby-fleming', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe node run-baby-fleming ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/node/update', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe node update ${flags} ${options}`,req)
    return res.json(body)
})


/**
 * NRS
 * **/
app.post('/api/nrs/add/:name', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const name = req.params.name
    body = await handleCMD(`safe nrs add ${name} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/nrs/create/:name', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const name = req.params.name
    body = await handleCMD(`safe nrs create ${name} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/nrs/help', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe nrs help ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/nrs/remove/:name', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const name = req.params.name
    body = await handleCMD(`safe nrs remove ${name} ${flags} ${options}`,req)
    return res.json(body)
})

/**
 * SEQ
 * **/
app.post('/api/seq/append/:data/:target', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const data = req.params.data
    const target = req.params.target
    body = await handleCMD(`safe seq append ${data} ${target} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/seq/help', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe seq help ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/seq/store/:data', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const data = req.params.data
    body = await handleCMD(`safe seq store ${data} ${flags} ${options}`,req)
    return res.json(body)
})


/**
 * SETUP
 * **/
app.post('/api/setup/completions/:shell', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const shell = req.params.shell
    body = await handleCMD(`safe setup completions ${shell} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/setup/help', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe setup help ${flags} ${options}`,req)
    return res.json(body)
})

/**
 * UPDATE
 * **/
app.post('/api/update', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe update ${flags} ${options}`,req)
    return res.json(body)
})


/**
 * WALLET
 * **/
app.post('/api/wallet/balance', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe wallet balance ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/wallet/create', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe wallet create ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/wallet/help', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe wallet help ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/wallet/insert/:target', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const target = req.params.target
    body = await handleCMD(`safe wallet insert ${target}${flags}${options}`,req)
    return res.json(body)
})

app.post('/api/wallet/transfer/:amount', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const amount = req.params.amount
    body = await handleCMD(`safe wallet transfer ${amount} ${flags} ${options}`,req)
    return res.json(body)
})


/**
 * XORURL
 * **/
app.post('/api/xorurl/:location', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const location = req.params.location
    body = await handleCMD(`safe xorurl ${location} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/xorurl/decode/:xorurl', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const xorurl = req.params.xorurl
    body = await handleCMD(`safe xorurl decode ${xorurl} ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/xorurl/help', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe xorurl help ${flags} ${options}`,req)
    return res.json(body)
})

app.listen(port, () => console.log(`SafeCLI API running on port 3000`))