#!/bin/bash
echo "[ ============> COMNET SCRIPT <============ ]"
echo "[Network Name]: comnet" 
echo "[Network Config Url]: $1"
sleep 2
echo ""
echo "Doing `safe networks add comnet $1`"
safe networks add comnet "$1"
sleep 2
echo ""
echo "Switching to added network with `safe networks switch comnet`"
safe networks switch comnet