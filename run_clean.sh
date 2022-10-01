#!/bin/bash
echo "[ ============> RUN_CLEAN SCRIPT <============ ]"
echo "Trying to remove ~/.safe folder if it exists to start clean"
rm -r ~/.safe
sleep 2
echo ""
echo "Getting latest Safe Network from github.com/maidsafe install.sh script..."
curl -so- https://raw.githubusercontent.com/maidsafe/safe_network/master/resources/scripts/install.sh | bash
