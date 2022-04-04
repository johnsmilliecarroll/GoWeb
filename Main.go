package main

import (
	"github.com/gin-gonic/gin"
	"github.com/thinkerou/favicon"
	"net/http"
)

func main() {
	r := gin.Default() //router, takes care of everything we need
	r.Use(favicon.New("./favicon.ico"))
	r.Static("/staticfiles", "./staticfiles") //set static directory
	r.LoadHTMLFiles("staticfiles/index.html", "staticfiles/more.html")
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{}) //set up / page
	})
	r.GET("/more", func(c *gin.Context) {
		c.HTML(http.StatusOK, "more.html", gin.H{}) //set up /more page
	})
	r.Run()
}
