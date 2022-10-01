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
 * OS CALLS
 */
app.post('/api/os/clean-safe', async (req, res) => {
    const safeDir = '$HOME/.safe'
    body = await handleCMD(`rm -rf ${safeDir}`,req)
    return res.json(body)
})

app.post('/api/os/curl-safe', async (req, res) => {
    const shell = 'bash'
    body = await handleCMD(`curl -so- https://sn-api.s3.amazonaws.com/install.sh | ${shell}`,req)
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

app.post('/api/networks/sections/:networkName', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const networkName = req.params.networkName
    body = await handleCMD(`safe networks sections ${networkName} ${flags} ${options}`,req)
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

app.post('/api/node/join', async (req, res) => {
    console.log(req.params)
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe node join ${flags} ${options}`,req)
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

app.post('/api/nrs/help', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe nrs help ${flags} ${options}`,req)
    return res.json(body)
})

app.post('/api/nrs/register/:name', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const name = req.params.name
    body = await handleCMD(`safe nrs register ${name} ${flags} ${options}`,req)
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

app.post('/api/wallet/deposit/:wallet_url', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const target = req.params.wallet_url
    body = await handleCMD(`safe wallet deposit ${target}${flags}${options}`,req)
    return res.json(body)
})

app.post('/api/wallet/help', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    body = await handleCMD(`safe wallet help ${flags} ${options}`,req)
    return res.json(body)
})


app.post('/api/wallet/reissue/:amount', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const amount = req.params.amount
    body = await handleCMD(`safe wallet reissue ${amount} ${flags} ${options}`,req)
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

app.post('/api/xorurl/pk/:pk', async (req, res) => {
    const flags = req.body.flags
    const options = req.body.options
    const pk = req.params.pk
    body = await handleCMD(`safe xorurl pk ${pk} ${flags} ${options}`,req)
    return res.json(body)
})

app.listen(port, () => console.log(`SafeCLI API running on port 3000`))