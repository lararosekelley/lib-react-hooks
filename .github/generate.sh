#!/usr/bin/env bash
# replaces placeholder text in template files with actual values
# ----------

# help message

read -d '' usage << EOF
usage: bash generate.sh [-h] -u username -e email -r repository

replaces placeholder text in template files with actual values

required arguments:
    -u username (github username)
    -e email (email address)
    -r repository (github repository name)

optional arguments:
    -h (show this message)
EOF

# get info from command line arguments

user=""
email=""
repo=""

OPTIND=1 # reset getopts in case it was used before

while getopts ":u:e:r:h?" opt; do
    case "$opt" in
        u) user=$OPTARG
            ;;
        e) email=$OPTARG
            ;;
        r) repo=$OPTARG
            ;;

        # error handling and help

        h|\?) echo "$usage" && exit 0
            ;;

        :) echo "fatal: option -$OPTARG requires an argument" && exit 1
            ;;
    esac
done

shift "$((OPTIND-1))" && [ "$1" = "--" ] && shift # shift off options

# exit if missing args

if [[ -z $user || -z $email || -z $repo ]]; then
    echo "fatal: missing required arguments" && exit 1
fi

# read files and populate w/ command line args

src=$(dirname "$(readlink -f ${BASH_SOURCE[0]})")

files=(
    "$src/CONTRIBUTING.md"
    "$src/ISSUE_TEMPLATE.md"
    "$src/PULL_REQUEST_TEMPLATE.md"
)


for f in "${files[@]}"; do
    if [ -f "$f" ]; then
        sed -i -e "s/{user}/${user}/g" "$f"
        sed -i -e "s/{email}/${email}/g" "$f"
        sed -i -e "s/{repo}/${repo}/g" "$f"
    fi
done

echo "done!" && exit 0
