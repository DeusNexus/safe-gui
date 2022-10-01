#!/bin/bash
echo "[ ============> RUN_CLEAN SCRIPT <============ ]"
echo "[Network Name]: comnet" 
echo "[Network Config Url]: $1"
sleep 2
echo ""
echo "Trying to remove ~/.safe folder if it exists to start clean"
rm -r ~/.safe
sleep 2
echo ""
echo "Getting latest Safe Network from github.com/maidsafe install.sh script..."
curl -so- https://raw.githubusercontent.com/maidsafe/safe_network/master/resources/scripts/install.sh | bash
sleep 2
echo ""
echo "Doing `safe networks add comnet $1`"
safe networks add comnet "$1"
sleep 2
echo ""
echo "Switching to added network with `safe networks switch comnet`"
safe networks switch comnet