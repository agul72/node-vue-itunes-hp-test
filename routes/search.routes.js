const {Router} = require('express');
const http = require('http');

const HOST = 'itunes.apple.com';

const router = Router()

router.get('/:str',
    async (req, resp) => {
        const musician = req.params.str.split(' ').join('+');
        try {
            const options = {
                host: HOST,
                path: `/search?term=${musician}&entity=album`
            }
            const albums = new Set();
            const json = [];
            const request = http.request(options, function (res) {
                let data = '';
                res.on('data', function (chunk) {
                    data += chunk;
                });
                res.on('end', function () {
                    const results = JSON.parse(data).results;
                    results.forEach(result => {
                        if (!albums.has(result.collectionName)) {
                            albums[result.collectionName] = {
                                title: result.collectionName,
                                thumb: result.artworkUrl60,
                                review: result.collectionViewUrl
                            };
                        }
                    });
                    for (let key in albums) {
                        json.push(albums[key])
                        // console.log();
                    }
                    resp.send(json);
                });
            });
            request.on('error', function (e) {
                console.log('Request result error', e.message);
            });
            request.end();
        } catch (e) {
            console.log('Error', e.message);
            resp.status(500)
                .json({message: "Something wrong, try again"})
        }
    });

module.exports = router;
