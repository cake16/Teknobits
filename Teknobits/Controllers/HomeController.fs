namespace Teknobits.Controllers

open System
open System.Collections.Generic
open System.Linq
open System.Threading.Tasks
open System.Diagnostics

open Microsoft.AspNetCore.Mvc
open Microsoft.Extensions.Logging

open Teknobits.Models

type HomeController (logger : ILogger<HomeController>) =
    inherit Controller()

    member this.Index () =
        this.View()

    member this.Privacy () =
        this.View()

    member this.mision () =
         this.View()

    member this.contacto () =
        this.View()

    member this.productos () =
        this.View()

    member this.servicios () =
         this.View()

    member this.vision () =
         this.View()

    member this.comandero () =
           this.View()

    member this.celaneo () =
            this.View()


    [<ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)>]
    member this.Error () =
        let reqId = 
            if isNull Activity.Current then
                this.HttpContext.TraceIdentifier
            else
                Activity.Current.Id

        this.View({ RequestId = reqId })
