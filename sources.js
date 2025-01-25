const adminFavorites = [
    { id: 747188, title: 'Asteroid City', poster_path: '/hfo7pvL9Fys7rocfL4VOzw9qDEQ.jpg', vote_average: 10 },
    { id: 680, title: 'Pulp Fiction', poster_path: '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg', vote_average: 10 },
    { id: 68718, title: 'Django Unchained', poster_path: '/bV0rWoiRo7pHUTQkh6Oio6irlXO.jpg', vote_average: 10 },
    // add more favorites as needed
];

const availableSources = [
    {
        id: 'multiembed',
        name: 'MultiEmbed',
        isFrench: false,
        urls: {
            movie: 'https://multiembed.mov/?video_id={id}&tmdb=1',
            tv: 'https://multiembed.mov/?video_id={id}&tmdb=1&s={season}&e={episode}'
        }
    },
    {
        id: 'frembed',
        name: 'Frembed',
        isFrench: true,
        urls: {
            movie: 'https://frembed.live/api/film.php?id={id}',
            tv: 'https://frembed.live/api/serie.php?id={id}&sa={season}&epi={episode}'
        }
    },
    {
        id: 'moviesapi',
        name: 'MoviesAPI',
        isFrench: false,
        urls: {
            movie: 'https://moviesapi.club/movie/{id}',
            tv: 'https://moviesapi.club/tv/{id}-{season}-{episode}'
        }
    },
    {
        id: 'embedsu',
        name: 'EmbedSU',
        isFrench: false,
        urls: {
            movie: 'https://embed.su/embed/movie/{id}',
            tv: 'https://embed.su/embed/tv/{id}/{season}/{episode}'
        }
    },
    {
        id: 'hexa',
        name: 'Hexa',
        isFrench: false,
        urls: {
            movie: 'https://api.hexa.watch/movie/{id}',
            tv: 'https://api.hexa.watch/tv/{id}/{season}/{episode}'
        }
    },
    {
        id: 'vidlink',
        name: 'VidLink',
        isFrench: false,
        urls: {
            movie: 'https://vidlink.pro/movie/{id}',
            tv: 'https://vidlink.pro/tv/{id}/{season}/{episode}'
        }
    },
    {
        id: 'vidsrc',
        name: 'VidSrc',
        isFrench: false,
        urls: {
            movie: 'https://vidsrc.cc/v2/embed/movie/{id}?autoPlay=false',
            tv: 'https://vidsrc.cc/v2/embed/tv/{id}/{season}/{episode}?autoPlay=false'
        }
    },
    {
        id: '2embed',
        name: '2Embed',
        isFrench: false,
        urls: {
            movie: 'https://www.2embed.cc/embed/{id}',
            tv: 'https://www.2embed.cc/embedtv/{id}&s={season}&e={episode}'
        }
    },
    {
        id: 'primewire',
        name: 'PrimeWire',
        isFrench: false,
        urls: {
            movie: 'https://www.primewire.tf/embed/movie?tmdb={id}',
            tv: 'https://www.primewire.tf/embed/tv?tmdb={id}&season={season}&episode={episode}'
        }
    },
    {
        id: '123embed',
        name: '123Embed',
        isFrench: false,
        urls: {
            movie: 'https://play2.123embed.net/movie/{id}',
            tv: 'https://play2.123embed.net/tv/{id}/{season}/{episode}'
        }
    },
    {
        id: '111movies',
        name: '111Movies',
        isFrench: false,
        urls: {
            movie: 'https://111movies.com/movie/{id}',
            tv: 'https://111movies.com/tv/{id}/{season}/{episode}'
        }
    },
    {
        id: 'vidbinge',
        name: 'VidBinge (4K)',
        isFrench: false,
        urls: {
            movie: 'https://vidbinge.dev/embed/movie/{id}',
            tv: 'https://vidbinge.dev/embed/tv/{id}/{season}/{episode}'
        }
    },
    {
        id: 'smashystream',
        name: 'SmashyStream',
        isFrench: false,
        urls: {
            movie: 'https://embed.smashystream.com/playere.php?tmdb={id}',
            tv: 'https://embed.smashystream.com/playere.php?tmdb={id}&season={season}&episode={episode}'
        }
    }
];