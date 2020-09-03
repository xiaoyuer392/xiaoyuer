<template>
    <van-skeleton title avatar :row="10" :loading="loading">
    <div class="speech-detail"> 
        <div class="myviedo">
            <img @click="autoplay" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU4ICg4NDY2MykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+aWNvbi/miJHnmoQv5pqC5YGcL+W4uOinhOWkjeWItjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLkuIDluK3np7vliqjorr7orqEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLop4TojIMv5YiH5Zu+55S75p2/IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIuMDAwMDAwLCAtMzkzLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbi9NZWRpYS/mkq3mlL4v5bi46KeELTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAwMDAwMCwgMzkxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuaSreaUviI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGZpbGw9IiMwMDAwMDAiIGN4PSIyNCIgY3k9IjI0IiByPSIyMS42Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzAuNTc0MzcyNCwyMi43MjQyNDE5IEMyNy42MzQ3MjEsMjAuNDYwMDI2NCAyNC42OTQ5MjIsMTguMTk2MDU5MyAyMS43NTUzNjkxLDE1LjkzMjE5MTYgQzIwLjcwODYzMjksMTUuMTI1Nzg1MiAxOS4yLDE1Ljg3OTE0OTYgMTkuMiwxNy4yMDc5Mjk3IEwxOS4yLDMwLjc5MjAzMDQgQzE5LjIsMzIuMTIwODEwNSAyMC43MDg2MzI5LDMyLjg3NDIyNDUgMjEuNzU1MzY5MSwzMi4wNjc4MTgyIEMyNC42OTQ5MjIsMjkuODAzOTUwNCAyNy42MzQ3MjEsMjcuNTM5OTgzMyAzMC41NzQzNzI0LDI1LjI3NTc2NzkgQzMxLjQwODU0MjUsMjQuNjMzNTAzNSAzMS40MDg1NDI1LDIzLjM2NjUwNjMgMzAuNTc0MzcyNCwyMi43MjQyNDE5IFoiIGlkPSLot6/lvoQiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt="" class="play">
            <img :src="speech.video_cover" alt="" class="video-play">
            <div class="video" v-if="speech.video_url" v-show="speech.video_url">
                <video preload="auto" x5-playsinline="" playsinline="true" webkit-playsinline="true" controls="controls" x5-video-player-fullscreen="true" x-webkit-airplay="allow" :src="speech.video_url[1].video_url" style="object-fit: contain;" class="myvideo"></video>
            </div>
            <div class="video" v-if="speech.video" v-show="speech.video">
                <video preload="auto" x5-playsinline="" playsinline="true" webkit-playsinline="true" controls="controls" x5-video-player-fullscreen="true" x-webkit-airplay="allow" :src="speech.video[1].video_url" style="object-fit: contain;" class="myvideo"></video>
            </div>
        </div>
        <div class="content">
            <div class="speecher" v-if="speech.speaker">
                <div class="title">{{speech.title}}</div>
                <img :src="speech.speaker.avatar" alt="">
                <div class="speech-title">
                    <div>
                        <span>{{speech.speaker.name}} - </span><span> {{speech.speaker.intro}}</span>
                    </div>
                </div>
                <div class="speech-dev">
                    {{speech.titlelanguage}}
                </div>
                <div class="timeshare">
                    <span>{{speech.created}}</span><span>{{speech.play_count}}次观看</span>
                </div>
            </div>
            <div class="speech-check">
                <div class="check-left">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU4ICg4NDY2MykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+aWNvbi/lhajlsYAv5paH5qGjL+mrmOS6rjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLkuIDluK3np7vliqjorr7orqEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLop4TojIMv5YiH5Zu+55S75p2/IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAxLjAwMDAwMCwgLTMxNy4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Imljb24v5YWo5bGAL+aWh+eovy/luLjop4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5OS4wMDAwMDAsIDMxNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLlm77mloflkqjor6IiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQuOTk5OTk5OTksMjEuMjUgTDE4LjUsMjEuMjUgQzE5Ljg0MjU2MSwyMS4yNSAyMC43NSwyMC40ODE0NjI3IDIwLjc1LDE5LjMzMjQwMjYgTDIwLjc1LDMuOTk5OTk5OTkgQzIwLjc1LDMuNjY4NDc5MzggMjAuNjE4MzAzOSwzLjM1MDUzNjk5IDIwLjM4Mzg4MzUsMy4xMTYxMTY1MiBDMjAuMTQ5NDYzLDIuODgxNjk2MDQgMTkuODMxNTIwNiwyLjc0OTk5OTk5IDE5LjUsMi43NDk5OTk5OSBMOC40OTk5OTk5OSwyLjc0OTk5OTk5IEM4LjE2ODQ3OTM4LDIuNzQ5OTk5OTkgNy44NTA1MzY5OCwyLjg4MTY5NjA0IDcuNjE2MTE2NTEsMy4xMTYxMTY1MSBDNy4zODE2OTYwNCwzLjM1MDUzNjk4IDcuMjQ5OTk5OTksMy42Njg0NzkzOCA3LjI0OTk5OTk5LDMuOTk5OTk5OTkgTDcuMjQ5OTk5OTksMTAuMjUgTDMuOTk5OTk5OTksMTAuMjUgQzMuNjY4NDc5MzgsMTAuMjUgMy4zNTA1MzY5OCwxMC4zODE2OTYgMy4xMTYxMTY1MSwxMC42MTYxMTY1IEMyLjg4MTY5NjA0LDEwLjg1MDUzNyAyLjc0OTk5OTk5LDExLjE2ODQ3OTQgMi43NDk5OTk5OSwxMS41IEwyLjc0OTk5OTk5LDE5IEMyLjc0OTk5OTk5LDIwLjI0MjY0MDcgMy43NTczNTkzLDIxLjI1IDQuOTk5OTk5OTksMjEuMjUgWiIgaWQ9Iui3r+W+hCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik04LDkuNzUwMDAwMDIgQzgsOS41NTEwODc2NSA3Ljk3MzY2MDc5LDkuMzYwMzIyMjEgNy45MjY3NzY3LDkuMjE5NjY5OTIgQzcuODc5ODkyNjEsOS4wNzkwMTc2MyA3LjgxNjMwNDEzLDkgNy43NSw5IEw2Ljc1MDAwMDAxLDkgQzYuNjgzNjk1ODgsOSA2LjYyMDEwNzQsOS4wNzkwMTc2MiA2LjU3MzIyMzMsOS4yMTk2Njk5MSBDNi41MjYzMzkyMSw5LjM2MDMyMjIgNi41LDkuNTUxMDg3NjUgNi41LDkuNzUwMDAwMDIgQzYuNSwxNC40Mjk3NjA0IDYuNSwxNy41MzkxNjExIDYuNSwxOS4wNzgyMDIyIEM2LjUsMTkuNTgwOTg4OSA2LjAyNjM4MDkzLDIwLjQ4NzMyNzQgNS4yMTE2NDA0NywyMC40ODczMjc0IEM0LjgyNDI1NTUsMjAuNDg3MzI3NCA1LjI1MzcwODY3LDIwLjY1ODIxODMgNi41LDIxIEw4LDIxIEw4LDkuNzUwMDAwMDIgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMSw0Ljk5OTk5OTk5IEMxMC40NDc3MTUyLDQuOTk5OTk5OTkgOS45OTk5OTk5OCw1LjQ0NzcxNTI1IDkuOTk5OTk5OTgsNS45OTk5OTk5OSBDOS45OTk5OTk5OCw2LjU1MjI4NDc1IDEwLjQ0NzcxNTIsNi45OTk5OTk5OSAxMSw2Ljk5OTk5OTk5IEMxMS41NTIyODQ3LDYuOTk5OTk5OTkgMTIsNi41NTIyODQ3NSAxMiw1Ljk5OTk5OTk5IEMxMiw1LjQ0NzcxNTI1IDExLjU1MjI4NDcsNC45OTk5OTk5OSAxMSw0Ljk5OTk5OTk5IFogTTE0LDEwIEwxMy41LDEwIEMxMy41LDEwIDEyLjY4LDcuOTU4NTAwMDEgMTEuNSw3Ljk5OTk5OTk5IEMxMC4yOSw4LjA0MjQ5OTk4IDkuNDk5OTk5OTksMTAuNSA5LjQ5OTk5OTk5LDEwLjUgTDE5LDEwLjUgQzE5LDEwLjUgMTguMDE0NSw1Ljk3ODUwMDAxIDE2LjUsNiBDMTQuOTYxLDYuMDIyMDAwMDEgMTQsMTAgMTQsMTAgWiBNMTguMjUsMTMgTDEyLjI1LDEzIEMxMS44MzU3ODY0LDEzIDExLjUsMTMuMzM1Nzg2NCAxMS41LDEzLjc1IEMxMS41LDE0LjE2NDIxMzYgMTEuODM1Nzg2NCwxNC41IDEyLjI1LDE0LjUgTDE4LjI1LDE0LjUgQzE4LjY2NDIxMzYsMTQuNSAxOSwxNC4xNjQyMTM2IDE5LDEzLjc1IEMxOSwxMy4zMzU3ODY0IDE4LjY2NDIxMzYsMTMgMTguMjUsMTMgWiBNMTguMjUsMTYuNSBMOS43NSwxNi41IEM5LjMzNTc4NjQ0LDE2LjUgOSwxNi44MzU3ODY0IDksMTcuMjUgQzksMTcuNjY0MjEzNiA5LjMzNTc4NjQ0LDE4IDkuNzUsMTggTDE4LjI1LDE4IEMxOC42NjQyMTM2LDE4IDE5LDE3LjY2NDIxMzYgMTksMTcuMjUgQzE5LDE2LjgzNTc4NjQgMTguNjY0MjEzNiwxNi41IDE4LjI1LDE2LjUgWiIgaWQ9IuW9oueKtiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="">
                    <span>文稿</span>
                </div>
                <div class="right">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYwLjEgKDg4MTMzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5pY29uL+mfs+inhumikS/pn7PpopHogLPmnLov6auY5LquPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IuS4gOW4reenu+WKqOiuvuiuoSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuinhOiMgy/liIflm77nlLvmnb8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTcuMDAwMDAwLCAtMzE2LjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbi9NZWRpYS/pn7PpopEv5aOw6Z+zL+W8gC/pu5HoibIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxNi4wMDAwMDAsIDMxNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLlo7Dpn7MiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2LjI1MzkwNjIsOC41OTk5NDUzMSBMMTYuMjUzOTA2Miw4LjU4OTQ0NTMxIEMxNS45ODEwNzEzLDguNTAwMTQ3ODQgMTUuNzg4MTIzNSw4LjI1NjI5Njg4IDE1Ljc2Mzk1NzYsNy45NzAyMzkyOCBDMTUuNzM5NzkxOCw3LjY4NDE4MTY3IDE1Ljg4OTA5NjQsNy40MTE0MTc1NSAxNi4xNDMwODQsNy4yNzc2MTQ2MSBDMTYuMzk3MDcxNyw3LjE0MzgxMTY4IDE2LjcwNjQ2NDMsNy4xNzQ5MzAwMiAxNi45Mjg3MTg4LDcuMzU2NjMyODEgQzE4LjU2Njg0OTEsOC4zMjIyMDA5NiAxOS41NzUwNTA1LDEwLjA3OTQzOTQgMTkuNTgxOTE4OCwxMS45ODA5NTEgQzE5LjU4ODcxNzMsMTMuODgyNDYyNiAxOC41OTMxNzE3LDE1LjY0NjkwMTkgMTYuOTYyMDIzNCwxNi42MjQyMTg3IEMxNi43NTI2ODYxLDE2Ljc5NTkyNjMgMTYuNDYyMzg4MywxNi44Mjk2NDYyIDE2LjIxOTI2NTksMTYuNzEwNDk0OCBDMTUuOTc2MTQzNCwxNi41OTEzNDM1IDE1LjgyNDkzOTYsMTYuMzQxMjQ5IDE1LjgzMjM5NTEsMTYuMDcwNjAxNiBDMTUuODM5ODUwNSwxNS43OTk5NTQyIDE2LjAwNDU5MywxNS41NTg1NjMgMTYuMjUzOTA2MiwxNS40NTI5NzY2IEwxNi4yNTM5MDYyLDE1LjQ0NjkyOTcgQzE3LjQ2MDIwOTYsMTQuNzI4MTg5IDE4LjE5OTIxOTcsMTMuNDI3NjI5OCAxOC4xOTkyMTk3LDEyLjAyMzQzNzUgQzE4LjE5OTIxOTcsMTAuNjE5MjQ1MiAxNy40NjAyMDk2LDkuMzE4Njg2MDQgMTYuMjUzOTA2Myw4LjU5OTk0NTMxIEwxNi4yNTM5MDYyLDguNTk5OTQ1MzEgWiBNMTYuNjUxMzgyOCwxOS44MjcyODEyIEMxNi42NTEyNDIyLDE5LjgyNzAyMzQgMTYuNjUxMDc4MSwxOS44MjY4MTI1IDE2LjY1MDk2MDksMTkuODI2NTU0NyBDMTYuNDAzNjU5MiwxOS45MjMxMjMgMTYuMTIzMDUxMywxOS44NzIxNjQ1IDE1LjkyNTQ5NDIsMTkuNjk0ODA5NiBDMTUuNzI3OTM3MSwxOS41MTc0NTQ2IDE1LjY0NzEyLDE5LjI0Mzk0NzQgMTUuNzE2NTU0NiwxOC45ODc3MDA2IEMxNS43ODU5ODkyLDE4LjczMTQ1MzggMTUuOTkzODM0OSwxOC41MzYxNjQ5IDE2LjI1MzkwNjIsMTguNDgyODEyNSBMMTYuMjUzOTA2MiwxOC40Nzc4OTA2IEMxOC45OTkyODEzLDE3LjYwNDUzOTEgMjAuOTg4MjgxMywxNS4wMzQ3MTA5IDIwLjk4ODI4MTMsMTIgQzIwLjk4ODI4MTMsOC45NjUyODkwNiAxOC45OTkyODEzLDYuMzk1NDYwOTQgMTYuMjUzOTA2Miw1LjUyMjEwOTM3IEwxNi4yNTM5MDYyLDUuNTIxMzM1OTQgQzE1Ljg5MzcwOTIsNS40NjAyMDA2MyAxNS42NDAzNDY5LDUuMTMzMzkwMzQgMTUuNjcwOTAxMyw0Ljc2OTMyMTggQzE1LjcwMTQ1NTgsNC40MDUyNTMyNiAxNi4wMDU3NDU0LDQuMTI1MjQzOSAxNi4zNzEwOTM4LDQuMTI1IEMxNi41NTIyNDIyLDQuMTI1IDE2LjYwNDI5NjksNC4xNTE5MDYyNSAxNi42MTYzNjcyLDQuMTY5NjcxODcgQzE2LjYwNjIxODgsNC4xOTQgMTYuNjI3MTI1LDQuMTg1NTE1NjIgMTYuNjE2MzY3Miw0LjE2OTY3MTg3IEMxNi42MTczNDE2LDQuMTY3Mjc0MjQgMTYuNjE4NDM2Nyw0LjE2NDkyNzQ5IDE2LjYxOTY0ODQsNC4xNjI2NDA2MiBDMTkuOTY0NTMxMyw1LjE5Nzg5ODQ0IDIyLjM5NDUzMTMsOC4zMTQ5OTIxOSAyMi4zOTQ1MzEzLDEyIEMyMi4zOTQ1MzEzLDE1LjY3MzMzNTkgMTkuOTc5ODU5NCwxOC43ODIyMjY2IDE2LjY1MTM4MjgsMTkuODI3MjgxMiBMMTYuNjUxMzgyOCwxOS44MjcyODEyIFogTTEzLjI3NzM0MzcsMjIuMzM1OTM4MiBMMTMuMjMwNDY4NywyMi4zMzU5MzgyIEMxMy4wMTE0NzAxLDIyLjMzNjIwMzIgMTIuNzk4Njk1MywyMi4yNjMwOTQzIDEyLjYyNjEwOTQsMjIuMTI4MjgxMyBDMTIuNjI2NDE0MSwyMi4xMzExODc1IDEyLjYyNjUwNzgsMjIuMTM0MTE3MiAxMi42MjY4MzU5LDIyLjEzNzAyMzQgTDYuMTg2NDQ1MzEsMTcuNDE0MDYyNSBMMi43NzczNDM3NSwxNy40MTQwNjI1IEMyLjEzMDEzNTA2LDE3LjQxNDA2MjUgMS42MDU0Njg3NSwxNi44ODkzOTYyIDEuNjA1NDY4NzUsMTYuMjQyMTg3NSBMMS42MDU0Njg3NSw3LjgwNDY4NzUgQzEuNjA1NDY4NzUsNy4xNTc0Nzg4MSAyLjEzMDEzNTA2LDYuNjMyODEyNSAyLjc3NzM0Mzc1LDYuNjMyODEyNSBMNi4xMjI1MDc4MSw2LjYzMjgxMjUgTDEyLjYyNjgzNTksMS44NjI5NzY1NiBDMTIuNjI2NTA3OCwxLjg2NTg1OTM3IDEyLjYyNjQxNDEsMS44Njg4MTI1IDEyLjYyNjEwOTQsMS44NzE2OTUzMSBDMTIuNzk4NzAwMSwxLjczNjg5Mzg0IDEzLjAxMTQ3MzUsMS42NjM3OTM3NCAxMy4yMzA0Njg3LDEuNjY0MDYxNzYgTDEzLjI3NzM0MzcsMS42NjQwNjE3NiBDMTMuODIwOTk5MSwxLjY2NDA2MTc2IDE0LjI2MTcxODgsMi4xMDQ3ODIyIDE0LjI2MTcxODgsMi42NDg0Mzc1IEwxNC4yNjE3MTg4LDIuNjk1MzEyNSBDMTQuMjYxNzE4OCwyLjY5NzY1NjI1IDE0LjI2MTU1NDcsMi43IDE0LjI2MTUzMTIsMi43MDIzNDM3NSBMMTQuMjYxNzE4OCwyLjcwMjM0Mzc1IEwxNC4yNjE3MTg4LDIxLjI5NzY1NjIgTDE0LjI2MTUzMTIsMjEuMjk3NTE1NiBDMTQuMjYxNTMxMiwyMS4yOTk4NTk0IDE0LjI2MTcxODgsMjEuMzAyMjAzMSAxNC4yNjE3MTg4LDIxLjMwNDU0NjkgTDE0LjI2MTcxODgsMjEuMzUxNDIxOSBDMTQuMjYxNzE4OCwyMS42MTI1MTg3IDE0LjE1ODA2MTksMjEuODYyOTM0NSAxMy45NzM0NTE3LDIyLjA0NzU3MSBDMTMuNzg4ODQxNSwyMi4yMzIyMDc2IDEzLjUzODQ0MDYsMjIuMzM1OTM4MiAxMy4yNzczNDM3LDIyLjMzNTkzODIgTDEzLjI3NzM0MzcsMjIuMzM1OTM4MiBaIE00Ljg4NjcxODc1LDguMzkwNjI1IEM0Ljg4NjcxODc1LDguMTk2NDYyMzkgNC43MjkzMTg4Niw4LjAzOTA2MjUgNC41MzUxNTYyNSw4LjAzOTA2MjUgTDMuMzYzMjgxMjUsOC4wMzkwNjI1IEMzLjE2OTExODY0LDguMDM5MDYyNSAzLjAxMTcxODc1LDguMTk2NDYyMzkgMy4wMTE3MTg3NSw4LjM5MDYyNSBMMy4wMTE3MTg3NSwxNS42NTYyNSBDMy4wMTE3MTg3NSwxNS44NTA0MTI2IDMuMTY5MTE4NjQsMTYuMDA3ODEyNSAzLjM2MzI4MTI1LDE2LjAwNzgxMjUgTDQuNTM1MTU2MjUsMTYuMDA3ODEyNSBDNC43MjkzMTg4NiwxNi4wMDc4MTI1IDQuODg2NzE4NzUsMTUuODUwNDEyNiA0Ljg4NjcxODc1LDE1LjY1NjI1IEw0Ljg4NjcxODc1LDguMzkwNjI1IFogTTEyLjg1NTQ2ODgsNC40NjAxNTYyNSBDMTIuODU0MjczNCw0LjQ2MTYzMjgxIDEyLjg1Mjg2NzIsNC40NjI5NDUzMSAxMi44NTE2NDg0LDQuNDY0Mzk4NDQgQzEyLjgyOTQ0NjMsNC4yODg4MTQ0NSAxMi43MTAyMDI0LDQuMTQwNzI0MTggMTIuNTQzMzk2NCw0LjA4MTU3NjgyIEMxMi4zNzY1OTAzLDQuMDIyNDI5NDcgMTIuMTkwNjkwOSw0LjA2MjMxOTcgMTIuMDYyODM1OSw0LjE4NDY5NTMxIEw2LjY0NDUzMTI1LDcuODUxNTYyNSBDNi42NDI0OTIxOSw3Ljg1MTU2MjUgNi42NDA1NDY4OCw3Ljg1MTgyMDMxIDYuNjM4NTMxMjUsNy44NTE4NjcxOSBDNi42Mzk3NzM0NCw3Ljg1NDk4NDM3IDYuNjQwNjY0MDYsNy44NTgyNjU2MiA2LjY0MTgzNTk0LDcuODYxNDA2MjUgQzYuNDUyNTY5NzksNy45ODU3Mjc5NSA2LjMyNzMxOTksOC4xODY3NzM2NyA2LjI5OTE1NjI1LDguNDExNDYwOTQgQzYuMjk3MDcwMzEsOC40MTE2NzE4NyA2LjI5NTA1NDY5LDguNDEyMTE3MTkgNi4yOTI5Njg3NSw4LjQxMjI4MTI1IEw2LjI5Mjk2ODc1LDE1LjU4NzcxODcgQzYuMjk1MDU0NjksMTUuNTg3ODgyOCA2LjI5NzA3MDMxLDE1LjU4ODMyODEgNi4yOTkxNTYyNSwxNS41ODg1MzkxIEM2LjMyNzMxOTksMTUuODEzMjI2MyA2LjQ1MjU2OTc5LDE2LjAxNDI3MjEgNi42NDE4MzU5NCwxNi4xMzg1OTM3IEM2LjY0MDY2NDA2LDE2LjE0MTczNDQgNi42Mzk3NzM0NCwxNi4xNDUwMTU2IDYuNjM4NTMxMjUsMTYuMTQ4MTMyOCBDNi42NDA1NDY4OCwxNi4xNDgxMzI4IDYuNjQyNDkyMTksMTYuMTQ4NDM3NSA2LjY0NDUzMTI1LDE2LjE0ODQzNzUgTDEyLjA2MjgzNTksMTkuODE1MjU3OCBDMTIuMTkwNjkwOSwxOS45Mzc2MzM0IDEyLjM3NjU5MDMsMTkuOTc3NTIzNyAxMi41NDMzOTY0LDE5LjkxODM3NjMgQzEyLjcxMDIwMjQsMTkuODU5MjI4OSAxMi44Mjk0NDYzLDE5LjcxMTEzODcgMTIuODUxNjQ4NCwxOS41MzU1NTQ3IEMxMi44NTI4NjcyLDE5LjUzNzAwNzggMTIuODU0MjczNCwxOS41MzgzMjAzIDEyLjg1NTQ2ODgsMTkuNTM5Nzk2OSBMMTIuODU1NDY4OCw0LjQ2MDE1NjI1IEwxMi44NTU0Njg4LDQuNDYwMTU2MjUgWiIgaWQ9IuW9oueKtiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="">
                    <span>音频</span>
                </div>
            </div>
            <div class="discuss">
                <div class="discuss-tittle">
                    <span>评论</span>
                </div>
                <div class="discuss-content">
                    <div class="discuss-item" v-for="cm in items" :key="cm.id">
                        <div class="user">
                            <div v-if="cm.user">
                                <img :src="cm.user.avater" alt="" class="user-img">
                                <span class="user-name">{{cm.user.nickname}}</span>
                                <span class="user-time">{{cm.created}}</span>
                            </div>
                            <div class="good">
                                <span>{{cm.like_count}}</span>
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTlweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTkgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYxLjIgKDg5NjUzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5pY29uL+WFqOWxgC/mjqjojZDngrnotZ4v5bi46KeEPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IuS4gOW4reenu+WKqOiuvuiuoSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuinhOiMgy/liIflm77nlLvmnb8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTYuMDAwMDAwLCAtNjg5LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbi/lhajlsYAv5o6o6I2Q54K56LWeL+W4uOinhCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkzLjAwMDAwMCwgNjg3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IueCuei1niI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYuMzkyODU3MTQsMjAgTDMuNjc4NTcxNDMsMjAgQzMuMzAzMjM2NjEsMjAgMywxOS42OTA2MjUgMywxOS4zMDc2OTIzIEwzLDguOTIzMDc2OTIgQzMsOC41NDAxNDQyMyAzLjMwMzIzNjYxLDguMjMwNzY5MjMgMy42Nzg1NzE0Myw4LjIzMDc2OTIzIEw2LjM5Mjg1NzE0LDguMjMwNzY5MjMgQzYuNzY4MTkxOTYsOC4yMzA3NjkyMyA3LjA3MTQyODU3LDguNTQwMTQ0MjMgNy4wNzE0Mjg1Nyw4LjkyMzA3NjkyIEw3LjA3MTQyODU3LDE5LjMwNzY5MjMgQzcuMDcxNDI4NTcsMTkuNjkwNjI1IDYuNzY4MTkxOTYsMjAgNi4zOTI4NTcxNCwyMCBaIE00LjM1NzE0Mjg2LDE4LjYxNTM4NDYgTDUuNzE0Mjg1NzEsMTguNjE1Mzg0NiBMNS43MTQyODU3MSw5LjYxNTM4NDYyIEw0LjM1NzE0Mjg2LDkuNjE1Mzg0NjIgTDQuMzU3MTQyODYsMTguNjE1Mzg0NiBaIE0xOC42MDcxNDI5LDIwIEw4LjQyODU3MTQzLDIwIEM4LjA1MzIzNjYxLDIwIDcuNzUsMTkuNjkwNjI1IDcuNzUsMTkuMzA3NjkyMyBMNy43NSw5LjY4Njc3ODg1IEM3Ljc1LDkuMjU2MjUgNy44OTg0Mzc1LDguODMwMDQ4MDggOC4xNjk4NjYwNyw4LjQ4ODIyMTE1IEwxMi4xMjQ2NjUyLDIuODA0ODA3NjkgQzEyLjUzMTgwOCwyLjI4Nzc0MDM4IDEzLjEzNjE2MDcsMiAxMy43NjM4MzkzLDIgTDE1LjIxNDI4NTcsMiBDMTUuNjIxNDI4NiwyIDE2LjAwMzEyNSwyLjE3MDkxMzQ2IDE2LjI2MTgzMDQsMi40NzE2MzQ2MiBDMTYuNTAzNTcxNCwyLjc1MDcyMTE1IDE2LjYxMTcxODgsMy4xMDU1Mjg4NSAxNi41NjUwNjcsMy40NzMzMTczMSBDMTYuNTYwODI1OSwzLjUwNzkzMjY5IDE2LjU1NDQ2NDMsMy41NDI1NDgwOCAxNi41NDM4NjE2LDMuNTc3MTYzNDYgTDE1LjQzNDgyMTQsNy41Mzg0NjE1NCBMMTkuOTY0Mjg1Nyw3LjUzODQ2MTU0IEMyMS4wODYwNDkxLDcuNTM4NDYxNTQgMjIsOC40MjExNTM4NSAyMiw5LjUwOTM3NSBMMjIsMTYuNzUyNjQ0MiBDMjIsMTguNTQxODI2OSAyMC40Nzc0NTU0LDIwIDE4LjYwNzE0MjksMjAgWiBNOS4xMDcxNDI4NiwxOC42MTUzODQ2IEwxOC42MDcxNDI5LDE4LjYxNTM4NDYgQzE5LjcyODkwNjIsMTguNjE1Mzg0NiAyMC42NDI4NTcxLDE3Ljc3ODEyNSAyMC42NDI4NTcxLDE2Ljc1MDQ4MDggTDIwLjY0Mjg1NzEsOS41MDkzNzUgQzIwLjY0Mjg1NzEsOS4xODcwMTkyMyAyMC4zMzc1LDguOTIzMDc2OTIgMTkuOTY0Mjg1Nyw4LjkyMzA3NjkyIEwxNC41MzU3MTQzLDguOTIzMDc2OTIgQzE0LjMyMzY2MDcsOC45MjMwNzY5MiAxNC4xMjIyMDk4LDguODIxMzk0MjMgMTMuOTk0OTc3Nyw4LjY0ODMxNzMxIEMxMy44Njc3NDU1LDguNDc1MjQwMzggMTMuODI1MzM0OCw4LjI1MDI0MDM4IDEzLjg4NDcwOTgsOC4wNDAzODQ2MiBMMTUuMTg2NzE4NywzLjM5MTEwNTc3IEwxMy43NjU5NTk4LDMuMzg0NjE1MzggQzEzLjU0MzMwMzYsMy4zODQ2MTUzOCAxMy4zMzMzNzA1LDMuNDc5ODA3NjkgMTMuMjA2MTM4NCwzLjY0MjA2NzMxIEw5LjI1MTMzOTI5LDkuMzIzMzE3MzEgQzkuMTQ5NTUzNTcsOS40NTUyODg0NiA5LjEwNzE0Mjg2LDkuNTY3Nzg4NDYgOS4xMDcxNDI4Niw5LjY4Njc3ODg1IEw5LjEwNzE0Mjg2LDE4LjYxNTM4NDYgWiBNMTUuMjkwNDEyOSwzLjQ0OTUxOTIzIEwxNS4zMzExMjcyLDMuNDQ5NTE5MjMgTDE1LjI5MDQxMjksMy40NDk1MTkyMyBaIiBpZD0iU2hhcGUiIGZpbGw9IiMzMzMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="">
                            </div>
                        </div>
                        <div class="content-review">
                            {{cm.content}}
                        </div>
                        <div class="children-reviw" v-if="cm.reply_comments" v-show="cm.reply_comments.length>0 ? true : false">
                            <div class="children-reviw-item"  v-for="cn in cm.reply_comments" :key="cn.id">
                                <span class="children-name">{{cn.nickname}}</span>
                                <span>:{{cn.content}}</span>
                            </div>
                            <div class="add-discuss">{{cm.reply_comments.length}}条回复</div>
                        </div>
                    </div>
                </div>
                <div class="lookall">
                    <div>
                        查看全部<span>{{comment_count}}</span>条评论
                    </div>
                </div>
            </div>
            <div class="recommend">
                <img class="icon1" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uL+aOqOiNkOaMiemSrjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLkuIDluK1INSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuinhOiMgy/liIflm77nlLvmnb8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01OS4wMDAwMDAsIC0zOTcuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uL+WFqOWxgC/mjqjojZDngrnotZ4v5bi46KeEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OC4wMDAwMDAsIDM5Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLngrnotZ4iPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiNCRkJGQkYiIGN4PSIxMS41IiBjeT0iNC41IiByPSIzLjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ljg1NzE0Mjg2LDE3IEwyLjU3MTQyODU3LDE3IEMyLjI1NTM1NzE0LDE3IDIsMTYuNzQyMTg3NSAyLDE2LjQyMzA3NjkgTDIsNy43NjkyMzA3NyBDMiw3LjQ1MDEyMDE5IDIuMjU1MzU3MTQsNy4xOTIzMDc2OSAyLjU3MTQyODU3LDcuMTkyMzA3NjkgTDQuODU3MTQyODYsNy4xOTIzMDc2OSBDNS4xNzMyMTQyOSw3LjE5MjMwNzY5IDUuNDI4NTcxNDMsNy40NTAxMjAxOSA1LjQyODU3MTQzLDcuNzY5MjMwNzcgTDUuNDI4NTcxNDMsMTYuNDIzMDc2OSBDNS40Mjg1NzE0MywxNi43NDIxODc1IDUuMTczMjE0MjksMTcgNC44NTcxNDI4NiwxNyBaIE0zLjE0Mjg1NzE0LDE1Ljg0NjE1MzggTDQuMjg1NzE0MjksMTUuODQ2MTUzOCBMNC4yODU3MTQyOSw4LjM0NjE1Mzg1IEwzLjE0Mjg1NzE0LDguMzQ2MTUzODUgTDMuMTQyODU3MTQsMTUuODQ2MTUzOCBaIE0xNS4xNDI4NTcxLDE3IEw2LjU3MTQyODU3LDE3IEM2LjI1NTM1NzE0LDE3IDYsMTYuNzQyMTg3NSA2LDE2LjQyMzA3NjkgTDYsOC40MDU2NDkwNCBDNiw4LjA0Njg3NSA2LjEyNSw3LjY5MTcwNjczIDYuMzUzNTcxNDMsNy40MDY4NTA5NiBMOS42ODM5Mjg1NywyLjY3MDY3MzA4IEMxMC4wMjY3ODU3LDIuMjM5NzgzNjUgMTAuNTM1NzE0MywyIDExLjA2NDI4NTcsMiBMMTIuMjg1NzE0MywyIEMxMi42Mjg1NzE0LDIgMTIuOTUsMi4xNDI0Mjc4OCAxMy4xNjc4NTcxLDIuMzkzMDI4ODUgQzEzLjM3MTQyODYsMi42MjU2MDA5NiAxMy40NjI1LDIuOTIxMjc0MDQgMTMuNDIzMjE0MywzLjIyNzc2NDQyIEMxMy40MTk2NDI5LDMuMjU2NjEwNTggMTMuNDE0Mjg1NywzLjI4NTQ1NjczIDEzLjQwNTM1NzEsMy4zMTQzMDI4OCBMMTIuNDcxNDI4Niw2LjYxNTM4NDYyIEwxNi4yODU3MTQzLDYuNjE1Mzg0NjIgQzE3LjIzMDM1NzEsNi42MTUzODQ2MiAxOCw3LjM1MDk2MTU0IDE4LDguMjU3ODEyNSBMMTgsMTQuMjkzODcwMiBDMTgsMTUuNzg0ODU1OCAxNi43MTc4NTcxLDE3IDE1LjE0Mjg1NzEsMTcgWiBNNy4xNDI4NTcxNCwxNS44NDYxNTM4IEwxNS4xNDI4NTcxLDE1Ljg0NjE1MzggQzE2LjA4NzUsMTUuODQ2MTUzOCAxNi44NTcxNDI5LDE1LjE0ODQzNzUgMTYuODU3MTQyOSwxNC4yOTIwNjczIEwxNi44NTcxNDI5LDguMjU3ODEyNSBDMTYuODU3MTQyOSw3Ljk4OTE4MjY5IDE2LjYsNy43NjkyMzA3NyAxNi4yODU3MTQzLDcuNzY5MjMwNzcgTDExLjcxNDI4NTcsNy43NjkyMzA3NyBDMTEuNTM1NzE0Myw3Ljc2OTIzMDc3IDExLjM2NjA3MTQsNy42ODQ0OTUxOSAxMS4yNTg5Mjg2LDcuNTQwMjY0NDIgQzExLjE1MTc4NTcsNy4zOTYwMzM2NSAxMS4xMTYwNzE0LDcuMjA4NTMzNjUgMTEuMTY2MDcxNCw3LjAzMzY1Mzg1IEwxMi4yNjI1LDMuMTU5MjU0ODEgTDExLjA2NjA3MTQsMy4xNTM4NDYxNSBDMTAuODc4NTcxNCwzLjE1Mzg0NjE1IDEwLjcwMTc4NTcsMy4yMzMxNzMwOCAxMC41OTQ2NDI5LDMuMzY4Mzg5NDIgTDcuMjY0Mjg1NzEsOC4xMDI3NjQ0MiBDNy4xNzg1NzE0Myw4LjIxMjc0MDM4IDcuMTQyODU3MTQsOC4zMDY0OTAzOCA3LjE0Mjg1NzE0LDguNDA1NjQ5MDQgTDcuMTQyODU3MTQsMTUuODQ2MTUzOCBaIE0xMi4zNDk4MjE0LDMuMjA3OTMyNjkgTDEyLjM4NDEwNzEsMy4yMDc5MzI2OSBMMTIuMzQ5ODIxNCwzLjIwNzkzMjY5IFoiIGlkPSJTaGFwZSIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iIzMzMzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="">
                <span class="tuijian">为你推荐</span>
                <div class="recommend-item" v-for="it in recommend_speeches" :key="it.id">
                    <div class="img">
                        <img :src="it.video_cover" alt="">
                    </div>
                    <div class="recommend-detail">
                        <span>{{it.title}}</span>
                        <span>{{it.speaker.name}}  &nbsp;&nbsp;一席第{{it.speaker.rank}}讲者</span>
                        <span>{{it.play_count}}次观看</span>
                    </div>
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOHB4IiBoZWlnaHQ9IjE0cHgiIHZpZXdCb3g9IjAgMCA4IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1NC4xICg3NjQ5MCkgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+aWNvbi/miJHnmoQv5Y+z566t5aS0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IuS4gOW4reenu+WKqOiuvuiuoSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuinhOiMgy/liIflm77nlLvmnb8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzIuMDAwMDAwLCAtNDQ2LjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbi/miJHnmoQv5Y+z566t5aS0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjguMDAwMDAwLCA0NDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5Y+z566t5aS0Ij4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLXBhdGgiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQuODI3ODU0NzIsMTQuMTU3Njk3MSBDNC44NjY3MDgzNywxNC4xNTc2OTcxIDQuOTA1NjEsMTQuMTQzNjEwNiA0LjkzNjM3MzE0LDE0LjExNTE2NTkgTDExLjMzMTEwOTUsOC4yMDAyNDgyMyBDMTEuMzk1OTI5NSw4LjE0MDI4ODg5IDExLjM5OTg3ODksOC4wMzkxMjU0NyAxMS4zMzk5MTk1LDcuOTc0Mjg5NDQgQzExLjI3OTk0NDIsNy45MDk0ODUzOCAxMS4xNzg3OTY4LDcuOTA1NTIwMDYgMTEuMTEzOTYwNyw3Ljk2NTQ3OTQxIEw0LjcxOTI1NjM0LDEzLjg4MDQyOTEgQzQuNjU0NDIwMywxMy45NDAzODg0IDQuNjUwNDg2OTcsMTQuMDQxNTY3OCA0LjcxMDQ0NjMxLDE0LjEwNjM3MTkgQzQuNzQxOTQ0OTcsMTQuMTQwNDI4OCA0Ljc4NDg1OTg2LDE0LjE1NzY5NzEgNC44Mjc4NTQ3MiwxNC4xNTc2OTcxIFogTTExLjIyOTIxMDYsOC4xODQzMjMwMyBDMTEuMjcyMDEzNiw4LjE4NDMyMzAzIDExLjMxNDcwNDYsOC4xNjcyNDY2MSAxMS4zNDYxODczLDguMTMzNDc3NSBDMTEuNDA2NDAyNSw4LjA2ODg4MTMgMTEuNDAyODY4OCw3Ljk2NzcxNzg5IDExLjMzODI4ODYsNy45MDc0ODY3MiBMNC44Nzk3NTU1MywxLjg4NTIzMzgxIEM0LjgxNTE3NTMxLDEuODI1MDM0NjMgNC43MTQwMjc4OSwxLjgyODU1MjI1IDQuNjUzNzgwNzMsMS44OTMxMzI0NSBDNC41OTM1NjU1NiwxLjk1NzcyODY2IDQuNTk3MDk5MTcsMi4wNTg4OTIwNiA0LjY2MTY3OTM4LDIuMTE5MTIzMjMgTDExLjEyMDE5NjUsOC4xNDEzNzYxNCBDMTEuMTUxMDA3Niw4LjE3MDA5MjY3IDExLjE5MDE0OTEsOC4xODQzMjMwMyAxMS4yMjkyMTA2LDguMTg0MzIzMDMgWiIgaWQ9IlNoYXBlIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt="">
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="input-div">
                <input type="text" placeholder="分享你的看法" v-model="review" v-on:keyup.13="insertRview">
            </div>
            <van-icon name="star-o" size="18" @click="oncollect" :color="color"/>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5pY29uL+WIhuS6q+Wbvuagh+WkjeWItjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLkuIDluK3np7vliqjorr7orqEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLop4TojIMv5YiH5Zu+55S75p2/IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY5LjAwMDAwMCwgLTMyMC4wMDAwMDApIiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9Imljb24v5YWo5bGAL+WIhuS6q+Wbvuaghy/luLjop4QtMeWkh+S7vSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY5LjAwMDAwMCwgMzIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuWIhuS6qyI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuNjQxMDI1NiwxNiBMMS41NTg5NzQzNSwxNiBDMC42OTc5NzY1OTMsMTYgMCwxNS4zMDIwMjM0IDAsMTQuNDQxMDI1NiBMMCwyLjM1ODk3NDM1IEMwLDEuNDk3OTc2NTkgMC42OTc5NzY1OTMsMC44IDEuNTU4OTc0MzUsMC44IEw0LjkyMTA4MDUyLDAuOCBDNS4yNjU0Nzk2MiwwLjggNS41NDQ2NzAyNiwxLjA3OTE5MDY0IDUuNTQ0NjcwMjYsMS40MjM1ODk3NCBDNS41NDQ2NzAyNiwxLjc2Nzk4ODg1IDUuMjY1NDc5NjIsMi4wNDcxNzk0OCA0LjkyMTA4MDUyLDIuMDQ3MTc5NDggTDEuNTU4OTc0MzUsMi4wNDcxNzk0OCBDMS40NzYyODEyMSwyLjA0NzE3OTQ4IDEuMzk2OTc0OTcsMi4wODAwMjkyMSAxLjMzODUwMjA5LDIuMTM4NTAyMDkgQzEuMjgwMDI5MjEsMi4xOTY5NzQ5NyAxLjI0NzE3OTQ4LDIuMjc2MjgxMjEgMS4yNDcxNzk0OCwyLjM1ODk3NDM1IEwxLjI0NzE3OTQ4LDE0LjQ0MTAyNTYgQzEuMjQ3MTc5NDgsMTQuNTIzNzE4OCAxLjI4MDAyOTIxLDE0LjYwMzAyNSAxLjMzODUwMjA5LDE0LjY2MTQ5NzkgQzEuMzk2OTc0OTcsMTQuNzE5OTcwOCAxLjQ3NjI4MTIxLDE0Ljc1MjgyMDUgMS41NTg5NzQzNSwxNC43NTI4MjA1IEwxMy42NDEwMjU2LDE0Ljc1MjgyMDUgQzEzLjgxMzIyNTIsMTQuNzUyODIwNSAxMy45NTI4MjA1LDE0LjYxMzIyNTIgMTMuOTUyODIwNSwxNC40NDEwMjU2IEwxMy45NTI4MjA1LDEwLjIyMzU4OTcgQzEzLjk1MjgyMDUsOS44NzkxOTA2NCAxNC4yMzIwMTEyLDkuNiAxNC41NzY0MTAzLDkuNiBDMTQuOTIwODA5NCw5LjYgMTUuMiw5Ljg3OTE5MDY0IDE1LjIsMTAuMjIzNTg5NyBMMTUuMiwxNC40NDEwMjU2IEMxNS4yLDE1LjMwMjAyMzQgMTQuNTAyMDIzNCwxNiAxMy42NDEwMjU2LDE2IFoiIGlkPSLot6/lvoQiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00LjEzNDc0ODg1LDEwLjE2NjU2NDQgQzQuMDE3MTY2ODgsMTAuMDE5MDAwNiAzLjk3MzQwMjMyLDkuODI1OTE4MDUgNC4wMTU4ODUwOSw5LjY0MjE1NTc2IEw0LjQwMjk0MzQ0LDcuOTcxOTU4MjcgQzUuMDM5MjkzNDYsNS4xNjkxNzQzMSA3LjQwNjIyODYyLDMuMDkxODc1MzQgMTAuMjcwNzQ4MiwyLjgyMjE4MjY5IEwxMC4yNzA3NDgyLDAuNjI2MTgyMzAyIEMxMC4yNjc3MjM5LDAuMzc5NjExMjc0IDEwLjQxMTU5OCwwLjE1NDc5NzM2MiAxMC42MzY5MTE4LDAuMDU0MDI0OTE1MyBDMTAuODYyMjI1NiwtMC4wNDY3NDc1MzEzIDExLjEyNTkzNzEsLTAuMDA0MjI3ODgwMzUgMTEuMzA4MDY0NywwLjE2MjIzODU1OCBMMTUuNzk3OTQxNyw0LjE2NzYxOTU2IEMxNS45MjkzMTEyLDQuMjg3MjUzNTIgMTYuMDAyODc2Myw0LjQ1NzUwOTA4IDE1Ljk5OTkxMzksNC42MzUwNTQ1NiBDMTUuOTk2OTUxNCw0LjgxMjYwMDA1IDE1LjkxNzc0NzIsNC45ODAzMTIzNCAxNS43ODI0NTk0LDUuMDk1NTA3MDUgTDExLjI5MjU4MjMsOC45MzA3NzUzNCBDMTEuMTA5NzI1OCw5LjA4NzAyMjQzIDEwLjg1MjgxMTcsOS4xMjMzMTk5IDEwLjYzMzc0NTksOS4wMjM4NTczOCBDMTAuNDE0NjgwMSw4LjkyNDM5NDg2IDEwLjI3MzEyODcsOC43MDcxODE4OCAxMC4yNzA3NDgyLDguNDY2ODMxNiBMMTAuMjcwNzQ4Miw2LjQ4NzMzODI4IEM4LjgxODUxNjExLDYuNjQzNjA0ODQgNy40ODIzMDY2OCw3LjM1MjQ4ODY5IDYuNTM5NTA1NjEsOC40NjY4MzE2IEw1LjA5OTY0ODUsMTAuMTgzNDIzNSBDNC45Nzk4ODMyMSwxMC4zMjMzMjc3IDQuODAzOTYxNTQsMTAuNDAyNjg2MiA0LjYxOTY5NjEzLDEwLjM5OTkzMDUgQzQuNDMwODg0MDMsMTAuNDAwMDY2MSA0LjI1MjMzMDgxLDEwLjMxNDEyODIgNC4xMzQ3NDg4NSwxMC4xNjY1NjQ0IFoiIGlkPSLlvaLnirYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="" class="fen">
        </div>
    </div>
    </van-skeleton>
</template>

<script>
import Vue from 'vue';
import { Skeleton } from 'vant';
import axios from 'axios';
Vue.use(Skeleton);
import {mapState} from 'vuex'
import { Icon } from 'vant';
Vue.use(Icon);

export default {
        data() {
            return {
                active: 0,
                speech: {},
                recommend_speeches: [],
                comment_count: 0,
                items: [],
                loading: true,
                id:0,
                name:'',
                color:'',
                isCollect:false,
                collectId:'',
                review:''
            }
        },
        methods:{
            autoplay(){
                document.querySelector('.video').style.display = 'block';
            },
            insertRview(){
                console.log(this.review)
                this.review=''
            },
            oncollect(){
                if(this.color === 'red'){
                    this.color = ''
                }else{
                    this.color = 'red'
                }
                if(!this.isCollect){
                    this.collectId = this.id;
                    this.$store.dispatch('mine/collectData',this.collectId)
                }
            }
        },
        computed:{
            ...mapState(['allid','allname'])
        },
        mounted() {
            this.id= this.allid;
            this.name= this.allname;
            console.log(this.id);
            axios({
            url: `/api/h5/${this.name}/${this.id}`
            })
            .then((result) => {
                if(this.name === '/speech'){
                    this.speech = result.data.data.speech;
                    this.recommend_speeches = result.data.data.recommend_speeches;
                    this.comment_count = result.data.data.comment_count;
                }else if(this.name === '/record'){
                    this.speech = result.data.data.record;
                    console.log(this.speech);
                    this.recommend_speeches = result.data.data.recommend_lists;
                    this.comment_count = result.data.data.record.comment_count;
                }
                
            });
            if(this.name === '/speech'){
                axios({
                url: `/api/h5/comments/?page=1&page_size=3&speech_id=${this.id}`
                })
                .then((result) => {
                    this.items = result.data.data.items;
                    console.log(result.data.data.items);
                    this.loading = false;
                });
            }else{
                axios({
                url: `/api/h5/comments/?page=1&page_size=3&record_id=${this.id}`
                })
                .then((result) => {
                    this.items = result.data.data.items;
                    console.log(result.data.data.items);
                    this.loading = false;
                });
            }
            
        },
    }
</script>

<style lang="stylus" scoped>
    .speech-detail
        width 100vw
        height calc(100% - 10rem)
        font-size 0
        overflow hidden
        position relative
        .myviedo
            width 100%
            height 42.2rem
            position fixed
            z-index 999
            .play
                width 7rem
                height: 7rem;
                position absolute
                right 6rem
                bottom 5rem
            .video-play
                width 100%
                height 42.2rem
            .video
                display none
                width 100%
                height 100%
                z-index 0
                position absolute
                left 0
                top 0
                .myvideo
                    width 100%
                    height 100%
                    top 0
                    left 0
                    display inline
        // 内容
        .content
            margin-top 42.2rem
            width 100%
            background-color #fafbfc
            height calc(100% - 42.2rem)
            overflow scroll
            padding-bottom 1rem
            .speecher
                padding 2rem 4rem 4rem 12rem
                background-color #fff
                margin-bottom 2px
                .title
                    margin-top 1.4rem
                    font-size 4rem
                    line-height 5.8rem
                    font-family SourceHanSerifSC
                    color #000
                    margin-bottom 2rem
                img 
                    width 6rem
                    height 6rem
                    border-radius 50%
                    margin-left -9rem
                    vertical-align top
                .speech-title
                    padding-top 1.8rem
                    width 100%
                    font-size 2.8rem
                    line-height 3rem
                    margin-left 3rem
                    display inline-block
                    font-family PingFangSC
                    font-weight 300
                    color #000
                    div
                        display -webkit-box
                        display -ms-flexbox
                        display flex
                        -webkit-box-pack start
                        -ms-flex-pack start
                        justify-content flex-start
                        span:nth-of-type(1)
                            white-space nowrap
                        span:nth-of-type(2)
                            text-align justify
                .speech-dev
                    font-size 2.8rem
                    line-height 4rem
                    font-family PingFangSC
                    font-weight 300
                    color #000
                    margin-bottom 2rem
                    margin-top 2rem
                    text-align justify
                .timeshare
                    color #4a4a4a
                    display -webkit-box
                    display -ms-flexbox
                    display flex
                    -webkit-box-pack justify
                    -ms-flex-pack justify
                    justify-content space-between
                    span 
                        font-size 2rem
                        line-height 2.8rem
            .speech-check
                width 100%
                height 10rem
                margin-top 2px
                background #fff
                display -webkit-box
                display -ms-flexbox
                display flex
                font-size 2.4rem
                color #000
                font-family PingFangSC
                font-weight 400
                -webkit-box-pack start
                -ms-flex-pack start
                justify-content flex-start
                padding 0 0 0 12rem
                -webkit-box-align center
                -ms-flex-align center
                align-items center
                -ms-flex-line-pack center
                align-content center
                margin-bottom 2rem
                .check-left
                    height 100%
                    width 25%
                    display -webkit-box
                    display -ms-flexbox
                    display flex
                    -webkit-box-pack start
                    -ms-flex-pack start
                    justify-content flex-start
                    -ms-flex-line-pack center
                    align-content center
                    -webkit-box-align center
                    -ms-flex-align center
                    align-items center
                    img
                        margin-right 1.5rem
                        width 3.5rem
                        height 3.5rem
                .right
                    height 100%
                    width 25%
                    display -webkit-box
                    display -ms-flexbox
                    display flex
                    -webkit-box-pack start
                    -ms-flex-pack start
                    justify-content flex-start
                    -ms-flex-line-pack center
                    align-content center
                    -webkit-box-align center
                    -ms-flex-align center
                    align-items center
                    img
                        margin-right 1.5rem
                        width 3.5rem
                        height 3.5rem
            .discuss
                background #fff
                margin-bottom 2rem
                .discuss-tittle
                    padding 0 4rem 0 12rem
                    height 7.8rem
                    width 100%
                    display -webkit-box
                    display -ms-flexbox
                    display flex
                    -webkit-box-pack justify
                    -ms-flex-pack justify
                    justify-content space-between
                    -webkit-box-align center
                    -ms-flex-align center
                    align-items center
                    position relative
                    background-color #fff
                    border-bottom .1rem solid #dee3e9
                    span
                        font-size 2.8rem
                        font-family SourceHanSerifSC
                        line-height 5.2rem
                        color #000
                .discuss-content
                    background-color #fff
                    width 100%
                    padding 2rem 0 0 12rem
                    overflow scroll
                    .discuss-item
                        border-bottom .1rem solid #dee3e9
                        margin-bottom 4rem
                        padding 0 4rem 4rem 0
                        .user
                            display -webkit-box
                            display -ms-flexbox
                            display flex
                            -webkit-box-pack justify
                            -ms-flex-pack justify
                            justify-content space-between
                            -webkit-box-align center
                            -ms-flex-align center
                            align-items center
                            -ms-flex-line-pack center
                            align-content center
                            div
                                .user-img
                                    width 6rem
                                    height 6rem
                                    border-radius 50%
                                    margin-left -9rem
                                    vertical-align top
                                .user-name
                                    font-size 3rem
                                    margin-left 3rem
                                    line-height 6rem
                                .user-time
                                    font-size 2.2rem
                                    font-family PingFangSC
                                    font-weight 400
                                    line-height 6rem
                                    color #6f6f6f
                                    margin-left 2rem
                            .good
                                display -webkit-box
                                display -ms-flexbox
                                display flex
                                -webkit-box-align end
                                -ms-flex-align end
                                align-items flex-end
                                -ms-flex-line-pack end
                                align-content flex-end
                                span
                                    font-size 2rem
                                    font-family PingFangSC-Regular
                                    font-weight 400
                                    margin-right .6rem
                                img
                                    width 3.2rem
                                    height 3.2rem
                        .content-review
                            font-size 2.6rem
                            font-family PingFangSC
                            font-weight 400
                        .children-reviw
                            background-color #f5f7fa
                            padding 1rem 0
                            margin-top 2rem
                            .children-reviw-item
                                font-size 2.2rem
                                font-family PingFangSC
                                font-weight 400
                                color #000
                                padding 0 2rem
                                line-height 3.5rem
                                .children-name
                                    color #000
                            .add-discuss
                                text-align center
                                line-height 4.8rem
                                margin-top 1rem
                                border-top 1px solid #dee3e9
                                font-size 2.2rem
                                font-family PingFangSC
                                font-weight 400
                                color #6f6f6f
                                margin-bottom -1rem
                .lookall
                    width 100%
                    background #fff
                    height auto
                    -webkit-box-sizing border-box
                    box-sizing border-box
                    padding 0 0 2rem
                    display -webkit-box
                    display -ms-flexbox
                    display flex
                    -webkit-box-pack center
                    -ms-flex-pack center
                    justify-content center
                    div
                        width 26rem
                        height 7rem
                        line-height 6.8rem
                        background #000
                        border-radius 3.5rem
                        height 100%
                        font-size 2rem
                        text-align center
                        font-family PingFangSC-Regular
                        font-weight 400
                        color #fafbfc
            .recommend
                padding 4rem 4rem 4rem 12rem
                background-color #fff
                .icon1
                    width 4rem
                    height 4rem
                    margin-left -8rem
                    vertical-align top
                .tuijian
                    font-size 2.4rem
                    line-height 4rem
                    margin-left 4rem
                    font-family SourceHanSerifSC
                    color #000
                .recommend-item
                    margin-top 2.4rem
                    display -webkit-box
                    display -ms-flexbox
                    display flex
                    -webkit-box-pack start
                    -ms-flex-pack start
                    justify-content flex-start
                    -webkit-box-align center
                    -ms-flex-align center
                    align-items center
                    .img
                        width 24rem
                        height 13.4rem
                        img
                            width 100%
                            height 100%
                    .recommend-detail
                        display flex
                        flex-direction column
                        margin-left 2rem
                        height 13.4rem
                        width 31.6rem
                        position relative
                        span
                            display inline-block
                        span:nth-of-type(1)
                            font-size 2.4rem
                            overflow hidden
                            white-space nowrap
                            text-overflow ellipsis
                            font-family PingFangSC
                            font-weight 400
                            color #000
                        span:nth-of-type(2)
                            font-size 2rem
                            margin-top 1.4rem
                            font-family PingFangSC
                            font-weight 300
                            color #000
                        span:nth-of-type(3)
                            font-size 2rem
                            line-height 2rem
                            font-family PingFangSC
                            font-weight 300
                            color #6f6f6f
                            position absolute
                            left 0
                            bottom 0
                    img
                        width 3.2rem
                        height 3.2rem
        .footer
            z-index 3
            height 10rem
            padding 1.8rem 4rem
            width 100%
            position fixed
            bottom 0
            left 0
            background #fff
            -webkit-box-shadow 0 0 1rem rgba(0,0,0,.2)
            box-shadow 0 0 1rem rgba(0,0,0,.2)
            display -webkit-box
            display -ms-flexbox
            display flex
            -webkit-box-pack justify
            -ms-flex-pack justify
            justify-content space-between
            -webkit-box-align center
            -ms-flex-align center
            align-items center
            .input-div
                width 50.8rem
                height 6.4rem
                background-color #f7f7f7
                border-radius 3.2rem
                display -webkit-box
                display -ms-flexbox
                display flex
                -webkit-box-pack justify
                -ms-flex-pack justify
                justify-content space-between
                -webkit-transition all .2s ease
                transition all .2s ease
                -webkit-box-align center
                -ms-flex-align center
                align-items center
                input
                    width 100%
                    height 6.4rem
                    outline none
                    border none
                    background-color transparent
                    font-size 2.4rem
                    font-family SourceHanSerifSC
                    color #919191
                    padding-left 3rem
            .xing
                width 4rem
                height 4rem
            .fen
                width 3.5rem
                height 3.5rem

</style>